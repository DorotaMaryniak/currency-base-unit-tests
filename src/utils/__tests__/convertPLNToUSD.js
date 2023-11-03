import { convertPLNToUSD } from './../convertPLNToUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
});

describe('ConvertPLNtoUSD', () => {
    it('should return NaN  when input is text', () => {
      expect(convertPLNToUSD('6')).toBeNaN();
      expect(convertPLNToUSD('Kwoka')).toBeNaN();
      expect(convertPLNToUSD('-543')).toBeNaN();
      expect(convertPLNToUSD('"pOl')).toBeNaN();
    });
  });