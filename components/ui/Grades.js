'use client';

import { useEffect, useState } from 'react';

function Grades() {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const res = await fetch('/api/grades');
        const data = await res.json();
        setGrades(data.grades);
      } catch (error) {
        console.error('Error fetching grades:', error);
      }
    };

    fetchGrades();
  }, []);

  return (
    <div>
      <h1>Grades</h1>
      <ul>
        {grades.map((grade, index) => (
          <li key={index}>{grade}</li>
        ))}
      </ul>
    </div>
  );
}

export default Grades;
