var userStorage = function() {
	var user = {
		name:'Brett',
		password:'puppLuv'
	}
	return {
		get:function() {
				return user.name;
			},
		set:function(newName) {
				user.name = newName;
			}
		}

}
var user = userStorage()
user.get()
user.set('Sam')
user.get()
