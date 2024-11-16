// components/TopicsBar.js
'use client'
import Link from 'next/link';
import { useState } from 'react';

const TopicsBar = () => {
  const topics = [
    { name: 'JavaScript', link: '/categories/javascript' },
    { name: 'React', link: '/categories/react' },
    { name: 'Node.js', link: '/categories/nodejs' },
    { name: 'Python', link: '/categories/python' },
    { name: 'CSS', link: '/categories/css' },
    { name: 'HTML', link: '/categories/html' },
    { name: 'MongoDB', link: '/categories/mongodb' },
    { name: 'TypeScript', link: '/categories/typescript' },
    { name: 'Angular', link: '/categories/angular' },
    { name: 'Vue', link: '/categories/vue' },
    { name: 'Ruby', link: '/categories/ruby' },
    { name: 'Go', link: '/categories/go' },
    { name: 'Java', link: '/categories/java' },
    { name: 'Kotlin', link: '/categories/kotlin' },
    { name: 'Swift', link: '/categories/swift' },
  ];

  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleSelect = (topicName) => {
    setSelectedTopic(topicName);
  };

  return (
    <div className="w-full overflow-x-auto bg-gray-700 text-white dark:bg-slate-50 dark:text-black whitespace-nowrap py-3 no-scrollbar">
      <div className="flex space-x-4 px-4">
        {topics.map((topic, index) => (
          <Link
            key={index}
            href={topic.link}
            className={`px-6 py-1.5 font-semibold rounded-md text-center min-w-[120px] 
              ${selectedTopic === topic.name 
                ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-white' // Selected topic style
                : 'text-gray-100 dark:text-gray-600 hover:bg-gray-600 hover:dark:bg-gray-300'
              }`}
            onClick={() => handleSelect(topic.name)}
          >
            {topic.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopicsBar;
