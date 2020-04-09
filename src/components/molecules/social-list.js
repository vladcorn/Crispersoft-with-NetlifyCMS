import React from 'react';
import { ReactComponent as TelegramSvg } from '@images/icons/telegram-2.svg';
import { ReactComponent as Skypevg } from '@images/icons/skype-2.svg';
import { ReactComponent as WhatsappSvg } from '@images/icons/whatsapp-2.svg';
import { Icon } from '@ui/atoms';
import {
  StyledSocialItem,
  StyledSocialLink,
  StyledSocialList,
} from '@styles/social-list';

const SocialList = () => {
  return (
    <StyledSocialList>
      <StyledSocialItem>
        <StyledSocialLink
          href='https://clc.to/CRISPERSOFT'
          target='_self'
          aria-label='whatsapp'
          className='seo-contacts-link'
        >
          <Icon>
            <WhatsappSvg />
          </Icon>
        </StyledSocialLink>
      </StyledSocialItem>
      <StyledSocialItem>
        <StyledSocialLink
          href='https://t.me/crispersoft'
          target='_self'
          aria-label='telegram'
          className='seo-contacts-link'
        >
          <Icon>
            <TelegramSvg />
          </Icon>
        </StyledSocialLink>
      </StyledSocialItem>
      <StyledSocialItem>
        <StyledSocialLink
          href='skype:Live:Crispersoft'
          target='_self'
          aria-label='skype'
          className='seo-contacts-link'
        >
          <Icon>
            <Skypevg />
          </Icon>
        </StyledSocialLink>
      </StyledSocialItem>
    </StyledSocialList>
  );
};

SocialList.defaultProps = {
  icons: [{}],
};

export default SocialList;
