import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const StudentBarChart = ({ data }) => {
    // 학생 데이터를 받아서 과목별 점수를 추출합니다
    const chartData = data.map(student => ({
        name: student.name,
        kor: student.kor,
        eng: student.eng,
        math: student.math,
        science: student.science
    }));

    return (
        <div>
            <BarChart
                width={750}
                height={480}
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 4" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend
                    align="right"
                    verticalAlign="top"
                    layout="vertical"
                />
                <Bar dataKey="kor" fill="#8884d8" name="국어" />
                <Bar dataKey="eng" fill="#82ca9d" name="영어" />
                <Bar dataKey="math" fill="#ffc658" name="수학" />
                <Bar dataKey="science" fill="rgba(150, 59, 64)" name="과학" />
            </BarChart>
        </div>
    );
};

export default StudentBarChart;