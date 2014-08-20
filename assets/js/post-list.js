(function(postList) {
    "use strict";

    var $posts = $('.controller .post'),
        $sections = $('.controller > section');


    /*  Counts the number of available posts.

        @return count        The number of available posts. */

    function countAvailablePosts($section) {
        return $section.filter(':visible').length;
    }

    /*  Check if a section is empty 

        @param $section     The section to check. */

    function isSectionEmpty($section) {
        return !!countAvailablePosts($section.find('.post'));
    }

    /*  Check the param is a valid filter.
        
        @return valid        Whether the filter is valid. */

    function isValidFilter(filter) {
        return (typeof filter !== 'undefined' &&
            typeof filter.param !== 'undefined' &&
            typeof filter.value !== 'undefined');
    }

    /*  Apply the passed in filter to the $postList.
        
        @param $postList    The list of posts to filter against.
        @param filter       The filter to apply as an object.
                            For example,
                                {   'param': 'date',
                                    'value': '201301',
                                    'match': '^='
                                }

        @return $postList   The filtered $postList. */

    function applyFilter($postList, filter) {
        var i = 0,
            l = 0,
            filterCriteria = [];

        if (!isValidFilter(filter)) {
            return $postList;
        }

        filter.value = filter.value.split(' ');
        l = filter.value.length;

        if (typeof filter.match === 'undefined') {
            filter.match = '=';
        }

        for (; i<l; i++) {
            filterCriteria.push('[data-' + filter.param + filter.match + filter.value[i] + ']');
        }

        return $postList.filter(filterCriteria.join(','));
    }

    /*  Get the list of posts based on the filters passed in.
        
        @param $postList    The list of posts to filter against.
        @param filters      Array of filters to apply.

        @return $postList   The filtered $postList. */

    function getPostList($postList, filters) {
        var i = 0,
            l = 0,
            $results = $posts;

        l = (typeof filters !== 'undefined') ? filters.length : 0;

        for (; i<l; i++) {
            $results = applyFilter($results, filters[i]);
        }

        return $results;
    }

    /*  Show the posts on the page based on the filters on the page.

        @param filters      Array of filter to apply. */

    function showPostList(filters) {
        /* e.g. getPostList([{'param':'date','value':'201301','match':'^='}, {'param':'browsers','value':'chrome firefox','match':'~='}]); */
        var $results = getPostList($posts, filters);

        $results.show();
        $posts.not($results).hide();

        toggleSections();
    }

    /*  Toggle sections to shown/hidden depending on if they are empty */

    function toggleSections() {
        $sections.each(function() {
            var $section = $(this);

            if (isSectionEmpty($section)) {
                $section.hide();
            } else {
                $section.show();
            }
        });
    }

    function initTesting() {
        if (devtools.test) {
            postList.countAvailablePosts = countAvailablePosts;
            postList.isSectionEmpty = isSectionEmpty;
            postList.isValidFilter = isValidFilter;
        }
    }

    function initEventHandlers() {
    }

    function init() {
        initEventHandlers();
    }

    postList.init = init;

}(devtools.postList = devtools.postList || {}));