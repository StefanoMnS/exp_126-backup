const sparksPopup = (function () {
  const getHandle = function (trgt) { // trgt is a string
    // pg targetH handle
    const targetH = document.querySelector(`${trgt}`);
    if (targetH !== null) return targetH;

  }

  // add styles here
  const mainStyles = `
    .transition { transition: all 0.5s ease-in-out; }
	#action_insert_16099276072724880 { position: fixed; right: -600px; bottom: 20px; z-index: 9999; }
	.close-popup {
		width: 40px
		height: 40px;
	}
	.sparks_popup_reveal { right: 16px !important; }
	.sparks_popup { width: 390px; padding: 30px; background: #fff; text-align: center; display: block; font-family: mns-london,Helvetica,Arial,sans-serif; box-shadow: 0 0 24px 0 rgba(0,0,0,0.22), 0 24px 24px 0 rgba(0,0,0,0.3); border-radius: 12px; background: url('https://asset2.cxnmarksandspencer.com/is/image/mands/sparks_popup_background.jpg'); background-size: cover; position: relative;}
	.sparks_popup h6 { width: 100%; font-size: 22px; /* font-weight: 600; */ /* letter-spacing: 0; */ /* line-height: 32px; */ margin: 0; text-align: left; }
	.sparks_popup p { text-align: left; font-size:16px; max-width: 290px; margin: 0; margin-top: 11px; line-height: 22px; }
	.sparks_popup a.sign_in_btn { background: #43d68a; border-radius: 5px; width: 100%; display: block; line-height: 50px; margin-top: 22px; font-size: 16px; color: #000; text-decoration: none; text-align: center; font-weight: bold; }
	.sparks_popup p.sign_in_text { margin-top: 20px; max-width: 100%; }
	.sparks_popup p.sign_in_text a.sign_in_link { color: #000; text-decoration: none; font-weight: 700; margin-left: 10px; display: inline-block; float: right; }
	.sparks_popup .svg_arrow { width: 1.4rem; height: 1.4rem; vertical-align: middle; }
	a.svg_close_x { position: absolute; top: 0px; right: 0px; cursor: pointer; }
	a.svg_close_x:hover { }
	a.svg_close_x svg { position: relative; }
	a.svg_close_x svg:hover { transform: scale(1.1); }
	a.svg_close_x svg { width: 1.4rem; height: 1.4rem; vertical-align: middle; position: absolute; top: 30px; right: 30px; cursor: pointer; }
	
	@media (min-width: 0px) and (max-width: 767px) {
	  .sparks_popup { width: calc(100% - 32px); right:-16px; }
	  .sparks_popup_reveal { right: 0px !important; }
	  .sparks_popup h6, .sparks_popup p { text-align:center; }
	  .sparks_popup p { max-width: 100%; }
	  a.svg_close_x { right: -10px; top: -10px; }
	}
	
	@media (min-width: 768px) and (max-width: 1024px) {
	}
`;

  return {

    // addCSS function
    addCSS: function (css) {
      const head = document.getElementsByTagName('head')[0]
      const s = document.createElement('style')
      s.setAttribute('type', 'text/css')
      s.appendChild(document.createTextNode(css))
      head.appendChild(s)
    },

    // doExperiment function
    insertPopup: function (divWrap) {
      divWrap.innerHTML = `
        <div id="action_insert_16099278056965069" class="sparks_popup_housing transition sparks_popup_reveal">
		    <div class="sparks_popup">
		      <h6>A chance to get your shopping for free?</h6>
		      <p>We’ll treat a Sparks customer every week</p>
		      <a class="sign_in_btn"
		        href="https://www.marksandspencer.com/webapp/wcs/stores/servlet/MSResUserRegistration?catalogId=10051&amp;myAcctMain=1&amp;langId=-24&amp;storeId=10151&amp;isHeaderReg=Y&amp;intid=popup_join_sparks-freeshop"
		        target="" title="Sign in now">Join Sparks now</a>
		        
		     <span class="close-popup">
		      
			      <a id="svg_close_x_sparks_popup" class="svg_close_x transition" title="Close pop up">
			        <svg id="Layer_1" class="transition" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
			          <g id="Sparks-look-_-feel" data-name="Sparks-look-&amp;-feel">
			            <g id="_320" data-name="320">
			              <g id="Overlay">
			                <polygon id="close"
			                  points="1.44 0 9.07 7.63 16.56 0.14 18 1.59 10.51 9.07 18 16.55 16.55 18 9.07 10.51 1.59 18 0.14 16.56 7.63 9.07 0 1.44 1.44 0">
			                </polygon>
			              </g>
			            </g>
			          </g>
			        </svg>
			      </a>
		      
		     </span>
		      
		    </div>
		  </div>
     `
    },

    // start exec
    init: function () {

      // adds css
      this.addCSS(mainStyles);

      // gets handle(s) on page
      const domHandle = getHandle('#navigation-commonfooter');

      // create exp wrapper
      const expWrapper = document.createElement('div');
      expWrapper.id = 'exp126__wrapper';
      expWrapper.className = 'exp126__wrapper';

      // do experiment
      this.insertPopup(expWrapper)
      
      // insert to the DOM
      domHandle.parentElement.insertBefore(expWrapper, domHandle)
    }
  }
})()

// checks window global object
const isBrowser = () => typeof window !== 'undefined'

if (isBrowser()) {
	
  window.addEventListener('load', function () {
    // calls init function
    sparksPopup.init();
    
     if (document.cookie.indexOf('MS_USER_COOKIE') > -1) {
    	
        // myPopup exists - ended
        if (window.sessionStorage.getItem('myPopup')) return true

        // otherwise
        const handle = document.querySelector('.sparks_popup_housing');
       
        // add session cookie
        window.sessionStorage.setItem('myPopup', true);
        // push into page
        handle.classList.add('sparks_popup_reveal');
        
    }
    
    // click on X
    const closePopup = document.querySelector('.exp126__wrapper .sparks_popup');
    closePopup.onClick = (function() {
    	this.style.display = 'none';
    });
    
    // When the user clicks anywhere outside of the modal, close it
    document.querySelector('.main-container').onClick = (function(e){
	   console.log(e)
	})
	
	
	window.onclick = function(event) { // outside of box
	  if (!event.target.closest('.hero-carousel')) {//pick a
	    closePopup.style.display = "none";
	  }
	}
    
   

	
    
    
    
    
  }); // load event
  
 
  
} //isBrowser


