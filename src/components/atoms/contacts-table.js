import React from 'react';

const ContactsTable = () => {
  return (
    <table className='contacts'>
      <tbody>
        <tr>
          <td>Whatsapp:</td>
          <td>
            <a
              className='text seo-contacts-link'
              href='https://clc.to/CRISPERSOFT'
              target='_self'
            >
              +380687531538
            </a>
          </td>
        </tr>
        <tr>
          <td>Telegram:</td>
          <td>
            <a
              className='text seo-contacts-link'
              href='https://t.me/CRISPERSOFT_SOLUTIONS'
              target='_self'
            >
              @Crispersoft
            </a>
          </td>
        </tr>
        <tr>
          <td>Skype:</td>
          <td>
            <a
              className='text seo-contacts-link'
              href='skype:Live:Crispersoft'
              target='_self'
            >
              Crispersoft
            </a>
          </td>
        </tr>
        <tr>
          <td>Telephone:</td>
          <td>
            <a
              className='text seo-contacts-link'
              href='tel:+16467605660'
              target='_self'
            >
              +16467605660
            </a>
          </td>
        </tr>
        <tr>
          <td />
          <td>
            <a
              className='text seo-contacts-link'
              href='tel:+380687531538'
              target='_self'
            >
              +380687531538
            </a>
          </td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>
            <a
              className='text seo-contacts-link'
              href='mailto:info@crispersoft.com'
              target='_self'
            >
              info@crispersoft.com
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ContactsTable;
