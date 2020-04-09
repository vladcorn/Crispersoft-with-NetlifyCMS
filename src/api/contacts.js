import ax from 'axios';

export function sendContactsData(data) {
  return ax.post('https://www.likimap.com/api/crisper', data);
}
