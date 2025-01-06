fetch('json/biodata.json')
    .then(response => response.json())
    .then(profileData => {
        const profileList = document.getElementById('profile-list');
        const aboutMe = document.getElementById('about-me');
        profileList.innerHTML = `
        <li><strong>Full Name </strong>: ${profileData.fullName}</li>
        <li><strong>Place of Birth </strong>: ${profileData.placeOfBirth}</li>
        <li><strong>Date of Birth</strong>: ${profileData.dateOfBirth}</li>
        <li><strong>Domicile</strong>: ${profileData.domicile}</li>
        <li><strong>Email </strong>: ${profileData.email}</li>
    `;
        aboutMe.innerHTML = `${profileData.aboutMe}`
    }).catch(error => console.error('Error loading profile data:', error));