export const blogPosts = [
    {
        date: "22.08.2023",
        title: "Maximizing Your Time in the Gym",
        imageURL: "https://images.unsplash.com/photo-1604480133080-602261a680df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltJTIwdHJhaW5lcnxlbnwwfDB8MHx8fDI%3D",
        author: 'Sophia Patel',
        paragraph: "Join us this Monday as we share tips on maximizing your time in the gym."
    },
    {
        date: "22.08.2023",
        title: "Get Ready For a Fitness Boot Camp Challenge",
        imageURL: "https://images.unsplash.com/photo-1434596922112-19c563067271?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGd5bSUyMGdpcmx8ZW58MHwwfDB8fHwy",
        author: "John Doe",
        paragraph: "Are you ready for a challenge? Tune in this Tuesday for a fitness boot camp challenge."
    },
    {
        date: "22.08.2023",
        title: "Upcoming Personalized Workout Session",
        imageURL: "https://images.unsplash.com/photo-1581009137042-c552e485697a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGd5bXxlbnwwfDB8MHx8fDI%3D",
        author: "Michael Sullivan",
        paragraph: "Get ready to workout with Micheal this Monday in a personalized workout session."
    }
];



export const blogTitles = blogPosts.map((a) => a.title)