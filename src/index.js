import qs from 'query-string';  // <- babel doesn't transpile this lib
import lib from './lib'; // <- but transpile this one

lib(123);

let bar = 'foo';

function test () {
    const bar = 1;
}

test();

console.log(bar);

const query = qs.parse(window.location.search);

