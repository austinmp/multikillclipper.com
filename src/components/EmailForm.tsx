import Divider from '@mui/material/Divider';
import styles from '../multi-kill-clipper.module.css'

const MailchimpForm = () => {

  const htmlContent = {
    '__html': `<div id="mc_embed_shell" class="mc_embed_shell">
    <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
    <style type="text/css">
      #mc_embed_shell{
        display:flex; 
        flex-wrap: wrap;
        justify-content: center; 
        align-items: center; 
        align-content:center; 
        align-self: center; 
        height: auto;
        width: 100%;

      }
      #mc_embed_signup{
        background:#fff; 
        font:14px Helvetica,Arial,sans-serif;
        display:flex;
        justify-content: center;
        width:100%;
        border:none;
      }

      #cta{
        font-size: 3.0rem;
        color:#212121
        font-family: 'DM Sans',sans-serif;
        font-weight: bold;
        line-height: 1.2;
        text-align:center;
      }

      #cta_subtext{
        font-size: 2.0rem;
        color:#212121
        font-family: 'Inter', sans-serif;
        line-height: 1.2;
        text-align:center;
      }

      #mc_embed_signup_scroll{
        font-size: 1.25rem;
        color:#212121
        font-family: 'Inter', sans-serif;
        line-height: 1.2;
      }

      #mce-EMAIL{
        height: 40px;
        font-size: 1.25rem;
        color:#212121
        font-family: 'Inter', sans-serif;
        line-height: 1.2;
      }

    </style>
    <div id="mc_embed_signup">
      <form action="https://multikillclipper.us8.list-manage.com/subscribe/post?u=3df200657c4d416bfbbb3890e&amp;id=987f78d24f&amp;f_id=00ff2de0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
          <div id="mc_embed_signup_scroll"><p id="cta">Stay Ahead of the Game!</p>
              <div id="cta_subtext">Get notified when new features and updates are released.</div>

              <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
              <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div>
          <div id="mce-responses" class="clear foot">
              <div class="response" id="mce-error-response" style="display: none;"></div>
              <div class="response" id="mce-success-response" style="display: none;"></div>
          </div>
      <div aria-hidden="true" style="position: absolute; left: -5000px;">
          /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
          <input type="text" name="b_3df200657c4d416bfbbb3890e_987f78d24f" tabindex="-1" value="" class="email_input" id="email_input">
      </div>
          <div class="optionalParent">
              <div class="${styles.subscribeBtnCtn}">
                  <input type="submit"  name="subscribe" class="${styles.subscribeBtn}" value="Subscribe">
                  <p><a href="http://eepurl.com/iKYOYo" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
              </div>
          </div>
      </div>
    </form>
    </div>
    <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>
    `
  }
  return (
    <div >
      <Divider className={styles.divider} />
      <div className={styles.emailFormCtn}>
        <div className={styles.emailForm} dangerouslySetInnerHTML={htmlContent} />
      </div >
    </div>
  );
};

export default MailchimpForm;