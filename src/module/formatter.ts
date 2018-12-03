export default {
  /**
   * @param  {number} number
   * @returns string
   */
  numberToCommaString(number: number): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

  /**
   * @param  {number} num
   * @param  {number} length
   * @returns string
   */
  formatNumberLength(num: number, length: number): string {
    let r = `${num}`;
    while (r.length < length) {
      r = `0${r}`;
    }
    return r;
  },

  /**
   * @param  {number} number
   * @param  {number} digits
   * @returns string
   */
  numberToKString(number: number, digits: number): string {
    const si = [
      { value: 1, symbol: '' },
      { value: 1E3, symbol: 'k' },
      { value: 1E6, symbol: 'M' },
      { value: 1E9, symbol: 'G' },
      { value: 1E12, symbol: 'T' },
      { value: 1E15, symbol: 'P' },
      { value: 1E18, symbol: 'E' }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    const num = number;
    let i;
    for (i = si.length - 1; i > 0; i -= 1) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
  },

  /**
   * @param  {string} filename
   * @returns string
   */
  removeExtension(filename: string): string {
    return filename.split('.').slice(0, -1).join('.');
  }
};
