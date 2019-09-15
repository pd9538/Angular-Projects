import { MarvellousChk } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  it('should return number is Prime', () => {
    const pipe = new MarvellousChk();
    expect(pipe.transform(11,'Prime')).toEqual('It is Prime number');
  });
  it('should return number is Perfect', () => {
    const pipe = new MarvellousChk();
    expect(pipe.transform(496,'Perfect')).toEqual('It is Perfect number');
  });
  it('should return number is Even', () => {
    const pipe = new MarvellousChk();
    expect(pipe.transform(10,'Even')).toEqual('It is Even number');
   });
  it('should return number is Odd', () => {
    const pipe = new MarvellousChk();
    expect(pipe.transform(11,'Odd')).toEqual('It is Odd number');
  });
  
});
