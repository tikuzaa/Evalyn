'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

type Interview = {
  id: string;
  company: string;
  role: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  feedback: string;
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const AvailableInterviews = () => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const res = await axios.get('/api/interviews');
        setInterviews(res.data);
      } catch (err) {
        console.error('Failed to fetch interviews:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchInterviews();
  }, []);

  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">Available Interviews</h2>

      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : interviews.length === 0 ? (
        <div className="text-center text-gray-400">No interviews available yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {interviews.map((interview, index) => (
            <motion.div
              key={interview.id}
              className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-xl transition-all"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <h3 className="text-xl font-semibold mb-1">{interview.role}</h3>
              <p className="text-gray-600 mb-2">{interview.company}</p>
              <span
                className={`inline-block mb-3 px-3 py-1 rounded-full text-sm font-medium ${
                  interview.difficulty === 'Easy'
                    ? 'bg-green-100 text-green-700'
                    : interview.difficulty === 'Medium'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {interview.difficulty}
              </span>
              <p className="text-sm text-gray-500">{interview.feedback}</p>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AvailableInterviews;