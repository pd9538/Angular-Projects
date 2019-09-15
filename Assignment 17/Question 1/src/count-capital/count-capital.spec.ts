
import {CountCapital} from './count-capital';

describe('CountCapital', ()=>{

    it('should return capital count of string', ()=>{
        expect(CountCapital('MarveLLOUS InFosysTem')).toEqual(9);
    })
})