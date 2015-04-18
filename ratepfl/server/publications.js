Meteor.publish('courses', function(){
	return Courses.find({});
});

Meteor.publish('singleCourse', function(id){
	return Courses.find({_id: id});
});

Meteor.publish('ratings', function(){
	return Ratings.find({});
});

Meteor.publish('comments', function(courseID){
	return Comments.find({courseID: courseID});
});