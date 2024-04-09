import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// data : 스프링에서 전달 받은 데이터를 프롭스로 넘겨 받았습니다.
const BarChart = ({ data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (!data || data.length === 0) return;

        // 차트 데이터 준비
        const labels = data.map(item => item.name); // 제품 이름을 레이블로 사용
        const prices = data.map(item => item.price); // 제품 가격을 데이터로 사용

        // 차트 생성
        const ctx = chartRef.current.getContext('2d');

        const randomColor = () => { // Math.random() = 0 이상 1 '미만'
            return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`;
        };

        // 항목별 색상을 랜덤하게 지정하기
        const colorList = data.map(() => randomColor());

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '제품 가격',
                    data: prices,
                    backgroundColor: colorList, // 막대 색상
                    borderColor: colorList,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true, // y축 시작 값 0으로 설정
                        title: {
                            display: true,
                            text: '가격 (원)' // y축 제목
                        }
                    }
                }
            }
        });
    }, [data]);

    return (
        <div>
            <canvas ref={chartRef} width="400" height="300"></canvas>
        </div>
    );
};

export default BarChart;