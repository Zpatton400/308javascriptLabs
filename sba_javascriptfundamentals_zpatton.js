function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
    // Check if the AssignmentGroup belongs to the CourseInfo
    if (AssignmentGroup.course_id !== CourseInfo.id) {
        throw new Error("Invalid input: AssignmentGroup does not belong to the CourseInfo");
    }

    // Initialize an empty array to store the results
    let results = [];

    // Iterate over each LearnerSubmission
    for (let submission of LearnerSubmissions) {
        // Find the corresponding assignment in the AssignmentGroup
        let assignment = AssignmentGroup.assignments.find(a => a.id === submission.assignment_id);

        // Check if the assignment exists and is not yet due
        // UX Best Practice: Handling edge cases gracefully
        if (assignment && new Date(assignment.due_at) > new Date()) {
            // Calculate the score percentage
            let scorePercentage = (submission.submission.score / assignment.points_possible) * 100;

            // If the submission is late, deduct 10 percent of the total points possible
            // UX Best Practice: Implementing business rules accurately
            if (new Date(submission.submission.submitted_at) > new Date(assignment.due_at)) {
                scorePercentage -= 10;
            }

            // Find the learner in the results array
            let learner = results.find(r => r.id === submission.learner_id);

            // If the learner does not exist in the results array, add them
            if (!learner) {
                learner = {
                    id: submission.learner_id,
                    avg: 0,
                    totalPoints: 0,
                    totalPossiblePoints: 0,
                    assignments: {}
                };
                results.push(learner);
            }

            // Add the assignment score to the learner's total points
            learner.totalPoints += submission.submission.score;
            learner.totalPossiblePoints += assignment.points_possible;

            // Add the assignment score to the learner's assignments
            learner.assignments[submission.assignment_id] = scorePercentage;
        }
    }

    // Calculate the average score for each learner
    // UX Best Practice: Providing clear and meaningful output
    for (let learner of results) {
        learner.avg = (learner.totalPoints / learner.totalPossiblePoints) * 100;
        delete learner.totalPoints;
        delete learner.totalPossiblePoints;
    }

    return results;
}


/*  Reflection #1:  What could you have done differently during the planning stages of your project to make the
    execution easier?  During the planning stages, it would have been beneficial to clearly define the data structures 
    and their relationships. This includes understanding the properties of each object and how they interact. 
*/

/*  Reflection #2:  Were there any requirements that were difficult to
    implement? What do you think would make them easier to implement in future projects?
    The requirement to handle various edge cases, such as zero points possible 
    or late submissions, was somewhat challenging.  In future projects, having a more detailed
    understanding of the data and potential edge cases upfront would be beneficial.
*/

/*  Reflection #3:  What would you add to, or change about your application if given more time?
    I would think more with end in mind about the UI/UX aspects of the project.  Although
    the script I developed is a backend script and does not directly interact with the user interface (UI) or affect the user experience (UX). 
    There are certain practices in the script that indirectly contribute to good UX.  
    I have commented UX best practices were applicable in the script.
*/

/*  Reflection #4: Use this space to make notes for your future self about anything that you think is important to
    remember about this process, or that may aid you when attempting something similar again.   
    Answer:  A note to self is that UI/UX best practices are more directly applicable 
    in frontend development where there is direct interaction with the user. 
    In backend development, good UX practices often involve clear error messages, 
    handling edge cases, and providing clear and meaningful output. 
*/


