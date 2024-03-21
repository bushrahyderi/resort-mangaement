import React from 'react'

const Activities = () => {
    const activities = [
      { name: 'Yoga by the Beach', time: '7:00 AM' },
      { name: 'Morning Meditation', time: '8:00 AM' },
      { name: 'Guided Nature Walk', time: '9:00 AM' },
      { name: 'Cooking Class: Healthy Breakfast', time: '10:00 AM' },
    ];
  
    return (
      <div>
        <h2>Early Bird Activities</h2>
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>
              {activity.name} - {activity.time}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default Activities