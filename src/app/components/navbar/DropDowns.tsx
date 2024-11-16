"use client";
import Link from "next/link";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const Dropdowns = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isQuizzesOpen, setIsQuizzesOpen] = useState(false);

  const toggleCategoriesDropdown = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
    if (isQuizzesOpen) setIsQuizzesOpen(false);
  };

  const toggleQuizzesDropdown = () => {
    setIsQuizzesOpen(!isQuizzesOpen);
    if (isCategoriesOpen) setIsCategoriesOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
      {/* Categories Dropdown */}
      <div className="relative">
        <button
          onClick={toggleCategoriesDropdown}
          className="flex items-center text-md xl:text-lg font-medium px-2 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 w-full lg:w-auto"
        >
          Categories <FaCaretDown className="ml-2" />
        </button>
        {isCategoriesOpen && (
          <div className="absolute left-0 mt-2 z-50 p-4 shadow-lg text-slate-300 bg-gray-700 rounded-lg w-full lg:w-[900px] grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2 text-[#fff4a3]">Frontend</h3>
              <ul className="space-y-1">
                <li><Link href="/categories/html">HTML</Link></li>
                <li><Link href="/categories/css">CSS</Link></li>
                <li><Link href="/categories/javascript">JavaScript</Link></li>
                <li><Link href="/categories/react">React</Link></li>
                <li><Link href="/categories/vue">Vue</Link></li>
                <li><Link href="/categories/angular">Angular</Link></li>
                <li><Link href="/categories/typescript">TypeScript</Link></li>
                <li><Link href="/categories/bootstrap">Bootstrap</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#fff4a3]">Backend</h3>
              <ul className="space-y-1">
                <li><Link href="/categories/node">Node.js</Link></li>
                <li><Link href="/categories/python">Python</Link></li>
                <li><Link href="/categories/java">Java</Link></li>
                <li><Link href="/categories/php">PHP</Link></li>
                <li><Link href="/categories/ruby">Ruby</Link></li>
                <li><Link href="/categories/go">Go</Link></li>
                <li><Link href="/categories/django">Django</Link></li>
                <li><Link href="/categories/express">Express.js</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#fff4a3]">Roles</h3>
              <ul className="space-y-1">
                <li><Link href="/categories/frontend-developer">Frontend Developer</Link></li>
                <li><Link href="/categories/backend-developer">Backend Developer</Link></li>
                <li><Link href="/categories/fullstack-developer">Fullstack Developer</Link></li>
                <li><Link href="/categories/data-scientist">Data Scientist</Link></li>
                <li><Link href="/categories/devops-engineer">DevOps Engineer</Link></li>
                <li><Link href="/categories/ux-ui-designer">UX/UI Designer</Link></li>
                <li><Link href="/categories/software-tester">Software Tester</Link></li>
                <li><Link href="/categories/cloud-architect">Cloud Architect</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#fff4a3]">Interview Prep</h3>
              <ul className="space-y-1">
                <li><Link href="/categories/react-interview">React Interview</Link></li>
                <li><Link href="/categories/java-interview">Java Interview</Link></li>
                <li><Link href="/categories/python-interview">Python Interview</Link></li>
                <li><Link href="/categories/aws-interview">AWS Interview</Link></li>
                <li><Link href="/categories/mongodb-interview">MongoDB Interview</Link></li>
                <li><Link href="/categories/linux-interview">Linux Interview</Link></li>
                <li><Link href="/categories/sql-interview">SQL Interview</Link></li>
                <li><Link href="/categories/system-design-interview">System Design Interview</Link></li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Quizzes Dropdown */}
      <div className="relative">
        <button
          onClick={toggleQuizzesDropdown}
          className="flex items-center text-md xl:text-lg font-medium  px-2 py-2 mb-6 md:mb-0 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 w-full lg:w-auto"
        >
          Quizzes <FaCaretDown className="ml-2" />
        </button>
        {isQuizzesOpen && (
          <div className="absolute z-50 left-0 mt-2 p-4 shadow-lg text-slate-300 bg-gray-700 rounded-lg w-full lg:w-[800px] grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold mb-2 text-[#fff4a3]">Programming Languages</h3>
              <ul className="space-y-1">
                <li><Link href="/quizzes/javascript">JavaScript Quiz</Link></li>
                <li><Link href="/quizzes/python">Python Quiz</Link></li>
                <li><Link href="/quizzes/java">Java Quiz</Link></li>
                <li><Link href="/quizzes/csharp">C# Quiz</Link></li>
                <li><Link href="/quizzes/cpp">C++ Quiz</Link></li>
                <li><Link href="/quizzes/ruby">Ruby Quiz</Link></li>
                <li><Link href="/quizzes/swift">Swift Quiz</Link></li>
                <li><Link href="/quizzes/php">PHP Quiz</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#fff4a3]">Web Development</h3>
              <ul className="space-y-1">
                <li><Link href="/quizzes/html">HTML Quiz</Link></li>
                <li><Link href="/quizzes/css">CSS Quiz</Link></li>
                <li><Link href="/quizzes/react">React Quiz</Link></li>
                <li><Link href="/quizzes/vue">Vue Quiz</Link></li>
                <li><Link href="/quizzes/angular">Angular Quiz</Link></li>
                <li><Link href="/quizzes/node">Node.js Quiz</Link></li>
                <li><Link href="/quizzes/express">Express.js Quiz</Link></li>
                <li><Link href="/quizzes/graphql">GraphQL Quiz</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#fff4a3]">Data Science</h3>
              <ul className="space-y-1">
                <li><Link href="/quizzes/dsa">DSA Quiz</Link></li>
                <li><Link href="/quizzes/numpy">NumPy Quiz</Link></li>
                <li><Link href="/quizzes/pandas">Pandas Quiz</Link></li>
                <li><Link href="/quizzes/scipy">SciPy Quiz</Link></li>
                <li><Link href="/quizzes/machine-learning">Machine Learning Quiz</Link></li>
                <li><Link href="/quizzes/deep-learning">Deep Learning Quiz</Link></li>
                <li><Link href="/quizzes/data-visualization">Data Visualization Quiz</Link></li>
                <li><Link href="/quizzes/statistics">Statistics Quiz</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#fff4a3]">DevOps & Cloud</h3>
              <ul className="space-y-1">
                <li><Link href="/quizzes/aws">AWS Quiz</Link></li>
                <li><Link href="/quizzes/docker">Docker Quiz</Link></li>
                <li><Link href="/quizzes/kubernetes">Kubernetes Quiz</Link></li>
                <li><Link href="/quizzes/terraform">Terraform Quiz</Link></li>
                <li><Link href="/quizzes/ansible">Ansible Quiz</Link></li>
                <li><Link href="/quizzes/jenkins">Jenkins Quiz</Link></li>
                <li><Link href="/quizzes/azure">Azure Quiz</Link></li>
                <li><Link href="/quizzes/gcp">GCP Quiz</Link></li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdowns;
