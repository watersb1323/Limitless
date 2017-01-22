var name = '888888';
var obj = {
    name: 'fooo',
    getName: function() {
        console.log(this.name);
        return this.name;
    }
};

obj.getName(); // fooo

var fn = obj.getName;

// HERE IS WHY
// remember i mentioned that "bind" function returns a function
// that returned function is the one we need to call NOT the function
// we bind the scope with
// in our case we should call "bar" NOT "fn"
var bar = fn.bind(obj);

fn();  // 88888
bar(); // fooo

// EXPLAINED
// Bind is used to bind the function defined in the object to the object passed as an argument to the bind.





// Callback: Pass function to function as argument
function test(arr,handler) {
	for (var i=0, ln=arr.length; i<ln; i++) {
		handler.fn.call(handler.scope, arr[i])
	}
}

test(['asfsafs','dsfa'], {
	fn: obj.getName,
	scope: obj
})


// GARBAGE COLLECTION
// By wrapping the array in the function, we are preventing it from getting deleted as a result of garbage collection.
// Thus by calling getRandomStr(), we can then produce arr from memory

var getRandomStr = (function() {
	var arr = ['a','b','c','a','b','c','a','b','c'];
	return function() {
		arr
	}
})();


