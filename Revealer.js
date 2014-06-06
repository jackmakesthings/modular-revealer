Revealer = (function() {

var revElements = [],
		active = false,
		debugging = false,
		settings = {
			triggers: document.querySelectorAll('.has-overlay'),
			targetClass: '.is-overlay',
			triggerEvent: 'hover'
		};

	function bindUIActions() {
        for ( ind = 0; ind < revElements.length; ind++ ) {
            revElements[ind].addEventListener('mouseover', onReveal, false);
            revElements[ind].addEventListener('mouseout', offReveal, false);
        }
		active = true;

		if( debugging ) {
			console.log('Revealers started');
		}
	}

	function onReveal() {
		active = true;
        var revealed = event.target.querySelector(s.targetClass);
        revealed.style.visibility = 'visible'
	}

    function offReveal() {
      var revealed = event.target.querySelector(s.targetClass);
      revealed.style.visibility = ''
    }

	function add(ele) {
		revElements.push(ele);
	}

	function addAll(arr) {
		revElements.length = 0;
		for ( ind = 0; ind < arr.length; ind++ ) {
			revElements[ind] = arr[ind];
		}

	}

	function debug() {
		debugging = true;
	}

	function init(opts) {
		s = opts || this.settings;
        addAll(s.triggers);
		bindUIActions();
	}

    function start() {
        opts = settings;
        init(opts);
    }

	function isActive() {
		return active;
	}

	return {
	init: init,
	add: add,
	addAll: addAll,
  start: start,
	isActive: isActive,
	debug: debug
	}

}());

var s;
Revealer.start();