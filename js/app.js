var Application = {

    init: function () {
        var self = this;

        if (typeof fuckAdBlock === 'undefined') {
            this._adBlockDetected();
        } else {
            fuckAdBlock.on(true, self._adBlockDetected).onNotDetected(self._adBlockNotDetected);
        }

        var sandboxCheckResult = sandblaster.detect();

        if (sandboxCheckResult.sandboxed) {
            this._sandboxDetected();
        } else {
            this._sandboxNotDetected();
        }
    },

    _adBlockDetected: function () {
        var adBlockStatusContainer = document.getElementById('adBlockStatus');
        adBlockStatusContainer.textContent = 'AdBlock is enabled';
        adBlockStatusContainer.className += ' detected';

        console.log('AdBlock is enabled');
    },

    _adBlockNotDetected: function () {
        var adBlockStatusContainer = document.getElementById('adBlockStatus');
        adBlockStatusContainer.textContent = 'AdBlock is not enabled';
        adBlockStatusContainer.className += ' not-detected';

        console.log('AdBlock is not enabled');
    },

    _sandboxDetected: function () {
        var sandboxStatusContainer = document.getElementById('sandboxStatus');
        sandboxStatusContainer.textContent = 'Sandbox is enabled';
        sandboxStatusContainer.className += ' detected';

        console.log('Sandbox is enabled');
    },

    _sandboxNotDetected: function () {
        var sandboxStatusContainer = document.getElementById('sandboxStatus');
        sandboxStatusContainer.textContent = 'Sandbox is not enabled';
        sandboxStatusContainer.className += ' not-detected';

        console.log('Sandbox is not enabled');
    }
};