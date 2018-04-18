/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function(Mozilla) {
    'use strict';

    var moreland = new Mozilla.TrafficCop({
        id: 'experiment-fxfirstrun-copy-042018',
        variations: {
            'v=a': 25, // control
            'v=b': 25,
            'v=c': 25,
            'v=d': 25
        }
    });

    moreland.init();
})(window.Mozilla);
