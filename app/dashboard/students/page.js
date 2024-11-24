import React from 'react';
import AddNewStudent from './_components/AddNewStudent';

function Student() {
  return (
    <div className="p-7 bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h2 className="font-extrabold text-5xl text-white tracking-wide">
          Students
        </h2>
        <div className="pr-10">
          {/* Add New Student Button */}
          <AddNewStudent />
        </div>
      </div>
    </div>
  );
}

export default Student;


