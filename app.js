// Create data, usually from API or backend

const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Mike Middelton',
        age: 21,
        gender: 'male',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/men/42.jpg'
    },
    {
        name: 'Jenna Johnson',
        age: 32,
        gender: 'female',
        lookingfor: 'male',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Frank Smith',
        age: 28,
        gender: 'male',
        lookingfor: 'female',
        location: 'Los Angeles CA',
        image: 'https://randomuser.me/api/portraits/men/12.jpg'
    },
    {
        name: 'Maria Smith',
        age: 33,
        gender: 'female',
        lookingfor: 'female',
        location: 'New York NY',
        image: 'https://randomuser.me/api/portraits/women/12.jpg'
    }
];

const profiles = profileIterator(data);

// call first profile
nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);
// Next Profile Display
function nextProfile(){
    const currentProfile = profiles.next().value;

    if(currentProfile != undefined){
        document.getElementById('profileDisplay').innerHTML = `
        <ul class = "list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">location: ${currentProfile.location}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">Looking For: ${currentProfile.lookingfor}</li>
        </ul>
        `;
    
        document.getElementById('imageDisplay').innerHTML = `
        <img src = "${currentProfile.image}">
        `;
    } else {
        // reload the page
        window.location.reload();
    }
}


// Profile Iterator
function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next : function(){
            return nextIndex < profiles.length 
            ? {value : profiles[nextIndex++], done : false} 
            : { done : true };
        }
    };
};

