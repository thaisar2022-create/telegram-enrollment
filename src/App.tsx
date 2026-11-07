import React, { useState } from 'react';
import { COURSES } from './coursesData';

export const App: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const handleSelect = (courseName: string) => {
    setSelectedCourse(courseName);
  };

  return (
    <>
      <header>
        <img
          className="logo"
          src="/logo.png"
          alt="ThaiSar ထိုင်းစာသင်တန်းကျောင်း Logo"
        />
        <div className="brand">
          <strong>ThaiSar</strong>
          <small>ထိုင်းဘာသာစကားသင်တန်းကျောင်း</small>
        </div>
      </header>

      <main>
        <div className="eyebrow">LEARN THAI WITH THAISAR</div>
        <h1>သင်တန်းအပ်ရန်</h1>
        <div className="line"></div>
        <p className="intro">တက်ရောက်လိုသည့် အတန်းကို ရွေးချယ်ပေးပါ။</p>

        <div className="grid" role="group" aria-label="တက်ရောက်လိုသည့်အတန်း">
          {COURSES.map((course) => {
            const isSelected = selectedCourse === course.name;
            return (
              <button
                key={course.id}
                className="card"
                type="button"
                aria-pressed={isSelected}
                data-name={course.name}
                onClick={() => handleSelect(course.name)}
              >
                <span className={`icon ${course.iconBgClass}`}>
                  {course.icon}
                </span>
                <span className="title">{course.name}</span>
                <span className="arrow" aria-hidden="true">
                  {isSelected ? '✓' : '↗'}
                </span>
              </button>
            );
          })}
        </div>

        <p id="status" role="status" aria-live="polite">
          {selectedCourse
            ? `${selectedCourse} ကို ရွေးထားပါသည်။ (နမူနာ)`
            : 'နမူနာ • အတန်းရွေးချယ်မှုကို စမ်းသုံးနိုင်ပါသည်။'}
        </p>

        <div className="footer">THAISAR · THAI LANGUAGE SCHOOL</div>
      </main>
    </>
  );
};

export default App;
