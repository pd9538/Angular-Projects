import { MyaddPipe } from './myadd.pipe';

describe('Pipe: MyaddPipe', () => {
  it('should addition the inputs', () => {
    let addpipe = new MyaddPipe();
    expect(addpipe.transform(12,13)).toEqual(25);
  });

});
