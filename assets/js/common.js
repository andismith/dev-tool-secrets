/*jshint strict: true, curly: true, eqeqeq: true, immed: true, indent: 4, browser: true, jquery: true, evil: true, regexdash: true, browser: true, trailing: true, sub: true, unused: true, devel: true */
//@ sourceMappingURL=/assets/js/common.js.map
var devtools = devtools || {};

(function(core) {
    "use strict";

    function init() {

        // check domain to ensure not on github project page
        devtools.utilities.checkUrl();

        devtools.filters.init();
        devtools.favorites.init();
        devtools.posts.init();
        devtools.scroll.init();
    }

    core.init = init;

}(devtools.core = devtools.core || {}));


(function(utilities) {
    "use strict";

    var DEBUG = true,
        firstVisit = -1;

    function storageSupport() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    }

    utilities.log = function() {
        if (DEBUG && typeof console !== 'undefined') {
            console.log.apply(console, arguments);
        }
    };

    utilities.load = function(type) {
        var value = '';
        if (storageSupport()) {
            value = localStorage.getItem(type);
            return value || '';
        }
        return '';
    };

    utilities.save = function(type, value) {
        if (storageSupport()) {
            localStorage.setItem(type, value);
        }
    };

    utilities.firstVisit = function() {
        if (firstVisit === -1) {
            firstVisit = utilities.load('firstVisit') || 1;
            utilities.save('firstVisit', 0);
        }
        return !!parseInt(firstVisit, 10);
    };

    utilities.checkUrl = function() {
        if(window.location.href.indexOf("github") > -1) {
            window.location.href = 'http://devtoolsecrets.com/';
        }
    };

}(devtools.utilities = devtools.utilities || {}));

(function(scroll, $) {
    "use strict";

    var TIMEOUT = 100,
        $window = $(window),
        scrollCheckRunning = false;

    function checkScroll() {
        var $post = {},
            scrollTop = 0,
            postOffset = 0,
            windowHeight = 0;

        $post = $('.controller .post:visible:not(.loaded)').filter(':first');

        if ($post.length > 0) {
            scrollTop = $window.scrollTop();
            postOffset = $post.offset().top;
            windowHeight = $window.height();

            // load more posts
            if ((scrollTop + (windowHeight*1.5)) > postOffset) {
                devtools.posts.loadBatch();
            }
        }
    }

    function onScroll() {
        if (!devtools.posts.getLoadState() && !scrollCheckRunning) {

            scrollCheckRunning = true;
            checkScroll();

            setTimeout(function() {
                scrollCheckRunning = false;
            }, TIMEOUT);
        }
    }

    function init() {
        $(window).scroll(onScroll);
    }

    scroll.init = init;

}(devtools.scroll = devtools.scroll || {}, jQuery));

(function(posts, $) {
    "use strict";

    var $posts = $('.controller .post'),
        $sections = $('.controller > section'),
        loadRunning = false;

    /* Checks if the post already has content.

       @param $post         The post we wish to check. */
    function postHasContent($post) {
        return ($post.hasClass('loaded'));
    }

    /* Checks if the post is available with the filters currently applied.

       @param $post         The post we wish to check. */
    function postIsAvailable($post) {
        return ($post.is(':visible'));
    }

    /* Counts the number of available posts.

       @return count        The number of available posts. */
    function countAvailablePosts($section) {
        return $section.filter(':visible').length;
    }

    /* Returns the load state - used to avoid queuing too many posts.

       @return loadRunning  Whether we are currently loading in posts. */
    function getLoadState() {
        return loadRunning;
    }

    /* Handles successful post loads.

       @param $post         The post element you were loading data in to.
       @param result        The AJAX loaded data.
       @param requested     Whether the user requested this - which determines
                            if we show the post. */
    function onLoadSuccess($post, result, requested) {
        var content = $(result).find('.post-content').html();

        $post.addClass('loaded').find('.post-content').html(content);

        if (requested) {
            showPost($post);
        }
    }

    /* Handles errors with AJAX loading.

       @param $post         The post element you were trying to load data in to.
       @param requested     Whether the user requested this - which determines
                            how we choose to handle the error. */
    function onLoadError($post, requested) {
        if (requested) {
            loadRunning = false;
            $post.addClass('error');
        } else {
            // hide silently
            $post.hide();
        }
    }

    /* Loads page data from another URL via AJAX.
       @param $post         The post whose data we wish to load.
       @param url           The URL we expect to find this data.
       @param requested     Whether this was a user request. */
    function loadPostData($post, url, requested) {
        loadRunning = true;
        $.ajax(url)
            .done(function(data) {
                onLoadSuccess($post, data, requested);
            })
            .fail(function() {
                onLoadError($post);
            })
            .always();
    }

    /* Toggle a post from show to hide or vice versa.

       @param e             The event that triggered this, which we want to stop default
                            actions occuring on. */
    function togglePost(e) {
        var $post = $(this).parent('.post');

        e.preventDefault();

        if ($post.hasClass('small')) {
            showPost($post);
        } else {
            hidePost($post);
        }
    }

    /* Shows a post on the page, checking whether it has loaded first.

       @param $post         The post you wish to show */
    function showPost($post) {
        var title = '',
            url = '';

        title = $post.find('.post-header a').text();
        url = $post.data('url');

        if (ga) {
            ga('send', 'pageview', {
                'page': url,
                'title': title
            });
        }

        if (postHasContent($post)) {
            $post.removeClass('small');
            showMediaContent($post);
        } else {
            loadPostData($post, url, true);
        }
    }

    /* Hides a post on the page.

       @param $post         The post you wish to hide */
    function hidePost($post) {
        $post.addClass('small');
    }

    function toggleSections() {
        $sections.show();
        $sections.each(function() {
            var $section = $(this);

            if (countAvailablePosts($section.find('.post')) === 0) {
                $section.hide();
            }
        });
    }

    /* Run through media in a post to see if there is anything we will need to load.

       @param $post The post we want to search for media content in. */
    function showMediaContent($post) {
        var $media = $post.find('.image img, .video iframe').filter(':not(.loaded)');

        $media.each(function() {
            var $item = $(this);
            if ($item.data('src') !== '') {
                loadMediaContent($item);
            }
        });
    }

    /* Load media such as images and videos only when the post has been
       opened to avoid a large initial page load.

       @param $item         The item we wish to load. */
    function loadMediaContent($item) {
        $item.addClass('loaded').attr('src', $item.data('src'));
    }

    /* Loads a batch of posts by identifying which posts have yet to be
       loaded in to the system. Useful to avoid delays when the user clicks
       to open a post. */
    function loadBatch() {
        var MAX_COUNT = 4,
            count = 0;
        var $filteredPosts = $posts.filter(':visible:not(.loaded)');

        $filteredPosts.each(function() {
            var $post = $(this),
                url = '';

            url = $post.data('url');

            if (postIsAvailable($post)) {
                count++;
                loadPostData($post, url);
            }

            if (count >= MAX_COUNT) {
                loadRunning = false;
                return false;
            }
        });
    }

    /* Initialise events related to posts. */
    function initEventHandlers() {
        $posts.on('click', '.post-header', togglePost);
    }

    /* General initialisation for this module */
    function init() {
        initEventHandlers();
        loadBatch();
    }

    /* publicly accessible functions */
    posts.toggleSections = toggleSections;
    posts.countAvailablePosts = countAvailablePosts;
    posts.loadBatch = loadBatch;
    posts.getLoadState = getLoadState;
    posts.init = init;

}(devtools.posts = devtools.posts || {}, jQuery));

(function(favorites, $) {
    "use strict";

    var $posts = $('.controller .post'),
        $favLoading = $('.loading-favorites'),
        $favButton = $('.favorite-selection'),
        $favNone = $('.no-favorites'),
        favoritesList = [];

    function saveFavorites() {
        devtools.utilities.save('favorites', favoritesList.join(','));
    }

    function loadFavorites() {
        var value = devtools.utilities.load('favorites');

        if (value.length) {
            return value.split(',');
        } else {
            return [];
        }
    }

    function getFavorites() {
        favoritesList = loadFavorites();

        $posts.each(function() {
            var $post = $(this);

            if (favoritesList.join().indexOf($post.data('url')) >= 0) {
                $post.addClass('favorite');
            }
        });
    }

    function setFavorite(e) {
        var $post = $(this).parents('.post'),
            i = 0,
            l = 0,
            url = '';

        e.preventDefault();
        url = $post.data('url');

        if ($post.hasClass('favorite')) {
            $post.removeClass('favorite');

            for (i = 0, l = favoritesList.length; i < l; i++) {
                if (favoritesList[i] === url) {
                    favoritesList.splice(i, 1);
                }
            }
        } else {
            $post.addClass('favorite');
            favoritesList.push(url);
        }

        devtools.utilities.log(favoritesList);
        saveFavorites();
        changeFilters();
    }

    function changeFilters() {
        $favLoading.hide();

        if (favoritesList.length > 0) {
            $favNone.hide();
            $favButton.show();
        } else {
            $favNone.show();
            $favButton.hide();
        }
    }

    function toggleFavorites(e) {
        var $elem = $(this);

        if ($elem.hasClass('checked')) {
            devtools.filters.filterPosts();
            devtools.filters.updateSecretCount();
            $elem.removeClass('checked');
        } else {
            filterPosts();
            devtools.filters.updateSecretCount();
            $elem.addClass('checked');
        }
    }

    function filterPosts() {
        $posts.each(function() {
            var $elem = $(this);

            if ($elem.hasClass('favorite')) {
                $elem.show();
            } else {
                $elem.hide();
            }
        });
        
        devtools.posts.toggleSections();
    }

    /* Initialise events related to favorites. */
    function initEventHandlers() {
        $posts.on('click', '.icon-favorite', setFavorite);
        $favButton.on('click', toggleFavorites);
    }

    function init() {
        initEventHandlers();
        getFavorites();
        changeFilters();
    }

    favorites.init = init;

}(devtools.favorites = devtools.favorites || {}, jQuery));

(function(filters, $) {
    "use strict";

    var categoryFilters = [],
        browserFilters = [],
        $categoryFilters = $('.type-selections').find('input:checkbox'),
        $browserFilters = $('.browser-selections').find('input:checkbox'),
        $controller = $('.controller'),
        $selections = $('.selections li'),
        $posts = $('.post');

    function setFilters(filters, $filters) {
        // empty filters
        filters = [];

        $filters.each(function() {
            if (this.checked) {
                filters.push(this.id);
                $(this).parent('li').addClass('checked');
            } else {
                $(this).parent('li').removeClass('checked');
            }
        });

        return filters;
    }

    function checkFiltered(filters, $filters) {

        filters = filters.join(' ');

        $filters.each(function() {
            if (filters.indexOf(this.id) >= 0) {
                this.checked = 'checked';
                $(this).parent('li').addClass('checked');
            } else {
                this.checked = '';
                $(this).parent('li').removeClass('checked');
            }
        });

    }

    function checkAll(filters, $filters) {
        // empty filters
        filters = [];

        $filters.each(function() {
            this.checked = 'checked';
            filters.push(this.id);
            $(this).parent('li').addClass('checked');
        });
    }

    function saveFilter(type, value) {
        devtools.utilities.save(type, value.join(','));
    }

    function loadFilter(type) {
        var value = devtools.utilities.load(type);

        if (value.length) {
            return value.split(',');
        } else {
            return [];
        }
    }

    function updateController(addAll) {
        if (addAll) {
            $controller.addClass('chrome firefox internet-explorer opera safari');
        } else {
            $controller.removeClass('chrome firefox internet-explorer opera safari').addClass(browserFilters.join(' '));
        }
    }

    function updateSecretCount() {
        var $secretCount = $('.secret-count').find('span');

        $secretCount.html(devtools.posts.countAvailablePosts($posts));
    }

    function onCategoryChange(e) {
        
        if (e) {
            e.preventDefault();
        }

        categoryFilters = setFilters(categoryFilters, $categoryFilters);
        saveFilter('categoryFilters', categoryFilters);

        filters.filterPosts();
    }

    function onBrowserChange(e) {
        
        if (e) {
            e.preventDefault();
        }

        browserFilters = setFilters(browserFilters, $browserFilters);
        saveFilter('browserFilters', browserFilters);

        updateController();

        filters.filterPosts();
    }

    function filterPosts() {
        $posts.each(function() {
            var $elem = $(this),
                i = 0,
                l = 0,
                postCategories = $elem.data('categories'),
                postBrowsers = $elem.data('browsers'),
                categoryFound = false,
                browserFound = false;

            for (i = 0, l=categoryFilters.length; i<l; i++) {
                if ((postCategories.indexOf(categoryFilters[i]) >= 0)) {
                    categoryFound = true;
                    break;
                }
            }

            for (i = 0, l=browserFilters.length; i<l; i++) {
                if ((postBrowsers.indexOf(browserFilters[i]) >= 0)) {
                    browserFound = true;
                    break;
                }
            }

            if (categoryFound && browserFound) {
                $elem.show();
            } else {
                $elem.hide();
            }
        });

        devtools.posts.toggleSections();
    }

    function onSelectionClick(e) {
        var $checkbox = {};

        e.preventDefault();

        $checkbox = $(this).find('input:checkbox');

        if ($checkbox.is(':checked')) {
            $checkbox.prop('checked', '');
            $checkbox.trigger('change');
        } else {
            $checkbox.prop('checked', 'checkbox');
            $checkbox.trigger('change');
        }

        updateSecretCount();
    }

    function initFilters() {
        categoryFilters = loadFilter('categoryFilters');
        browserFilters = loadFilter('browserFilters');

        if (devtools.utilities.firstVisit) {
            checkAll(categoryFilters, $categoryFilters);
            checkAll(browserFilters, $browserFilters);
            onCategoryChange();
            onBrowserChange();
        } else {

            if (categoryFilters.length === 0) {
                checkAll(categoryFilters, $categoryFilters);
            } else {
                checkFiltered(categoryFilters, $categoryFilters);
            }
            if (browserFilters.length === 0) {
                checkAll(browserFilters, $browserFilters);
                updateController(true);
            } else {
                checkFiltered(browserFilters, $browserFilters);
                updateController();
            }
        }




        updateSecretCount();
    }

    function initEventHandlers() {
        $selections.on('click', onSelectionClick)
        $categoryFilters.on('change', onCategoryChange);
        $browserFilters.on('change', onBrowserChange);
    }

    function init() {
        initEventHandlers();

        initFilters();

        filterPosts();
    }

    filters.updateSecretCount = updateSecretCount;
    filters.filterPosts = filterPosts;
    filters.init = init;

}(devtools.filters = devtools.filters || {}, jQuery));

devtools.core.init();
