document.addEventListener('DOMContentLoaded', () => {
    const jobListings = [
        { title: 'Software Engineer', company: 'Tech Corp', location: 'New York, NY' },
        { title: 'Data Scientist', company: 'Data Inc.', location: 'San Francisco, CA' },
        { title: 'Product Manager', company: 'Innovate LLC', location: 'Austin, TX' },
        // Add more job listings here
    ];

    const jobContainer = document.getElementById('job-listings');

    jobListings.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <p>${job.location}</p>
            <button>Apply Now</button>
        `;
        jobContainer.appendChild(jobCard);
    });
});
