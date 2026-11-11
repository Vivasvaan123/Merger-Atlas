
const fs=require('fs'),vm=require('vm');
const source=fs.readFileSync(process.argv[2],'utf8').replace(/start\(\);\s*$/,'');
const els={clo:{value:'0'},chi:{value:'2'}};
const ctx={console,document:{getElementById:id=>els[id]},Map,Set,Number,Math,JSON,Array,Error,Blob:global.Blob,setTimeout,clearTimeout};vm.createContext(ctx);vm.runInContext(source,ctx);
vm.runInContext(`
cols={x:[null,-100,0,1,2,100],constant:[4,4],empty:[null]};
function assert(v,m){if(!v)throw Error(m);}
assert(quantile([0,10],.5)===5,'quantile interpolation');
assert(JSON.stringify(bounds('x','full'))==='[-100,100]','full bounds');
assert(JSON.stringify(bounds('x','pct'))===JSON.stringify([-96,96.08]),'percentile bounds');
assert(JSON.stringify(bounds('x','manual','clo','chi'))==='[0,2]','manual bounds');
assert(bounds('constant','full')[0]<4&&bounds('constant','full')[1]>4,'constant padding');
assert(JSON.stringify(bounds('empty','full'))==='[0,1]','empty bounds');
assert(csvValue('a"b')==='"a""b"','CSV escaping');
`,ctx);
els.clo.value='2';els.chi.value='1';let rejected=false;try{vm.runInContext("bounds('x','manual','clo','chi')",ctx)}catch(e){rejected=true}if(!rejected)throw Error('invalid manual not rejected');
console.log('8 JavaScript helper checks passed');
