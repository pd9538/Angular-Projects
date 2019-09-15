import { MymultPipe } from './mymult.pipe';

describe('Pipe: MymultPipe', () => {
  it('should multiply the inputs', () => {
    let multpipe = new MymultPipe();
    expect(multpipe.transform(5,10)).toEqual(50);
  });

});
