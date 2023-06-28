import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ConnectUs() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [contactTime, setContactTime] = useState('');
  const [email, setEmail] = useState('');
  const [cost, setCost] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      tel,
      contactTime,
      email,
      cost,
      type,
    };
    window.alert('已送出表單，即將導向首頁');
    navigate('/');
  };

  return (
    <div>
      <h5 className="text-3xl font-semibold text-center text-TT-color ">
        <span className="border-b-2 border-TT-color">預約資料</span>
      </h5>
      <div className="flex justify-center items-center text-xl ">
        <form action="#" method="POST" name="Google" onSubmit={handleSubmit}>
          <label htmlFor="name" className="sm:w-[120px] w-[80px] inline-block">
            姓名：
          </label>{' '}
          <input
            type="text"
            id="name"
            name="name"
            required
            className="sm:w-[300px] mt-8 border border-yellow-300 rounded-md  focus:bg-slate-200"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="tel" className="sm:w-[120px] w-[80px] inline-block">
            電話：
          </label>{' '}
          <input
            className="sm:w-[300px] mt-4  border border-yellow-300 rounded-md  focus:bg-slate-200"
            type="tel"
            id="tel"
            name="tel"
            required
            onChange={(e) => setTel(e.target.value)}
          />
          <br />
          <label htmlFor="contactTime" className="sm:w-[120px] w-[100px] inline-block">
            聯繫時間：
          </label>{' '}
          <select
            name="contactTime"
            id="contactTime"
            required
            className="sm:w-[300px] mt-4  border border-yellow-300 rounded-md  focus:bg-slate-200"
            onChange={(e) => setContactTime(e.target.value)}
          >
            <option value="">請選擇聯繫時間</option>
            <option value="09:00am~12:00pm">09:00am~12:00pm</option>
            <option value="13:00pm~17:00pm">13:00pm~17:00pm</option>
            <option value="19:00pm~21:00pm">19:00pm~21:00pm</option>
          </select>
          <br />
          <label htmlFor="email" className="sm:w-[120px] w-[80px] inline-block">
            信箱：
          </label>{' '}
          <input
            type="email"
            name="email"
            id="email"
            required
            className="sm:w-[300px] mt-4  border border-yellow-300 rounded-md  focus:bg-slate-200"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="cost" className="sm:w-[120px] w-[80px] inline-block">
            預算：
          </label>{' '}
          <input
            type="text"
            id="cost"
            name="cost"
            className="sm:w-[300px] mt-4  border border-yellow-300 rounded-md  focus:bg-slate-200"
            onChange={(e) => setCost(e.target.value)}
          />
          <br />
          <label htmlFor="type" className="sm:w-[120px] w-[100px] inline-block">
            旅行類別：
          </label>{' '}
          <select
            name="type"
            id="type"
            className="sm:w-[300px] mt-4  border border-yellow-300 rounded-md  focus:bg-slate-200"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">請選擇旅行類別</option>
            <option value="情侶出遊">情侶出遊</option>
            <option value="家族旅行">家族旅行</option>
            <option value="個人行">個人行</option>
            <option value="三五好友">三五好友</option>
          </select>
          <br />
          <div className="flex items-center justify-center ">
            <button
              type="submit"
              className="m-8 py-4 px-8 text-3xl font-semibold  mx-7 bg-yellow-300 text-gray-600 rounded-3xl hover:transform hover:scale-110 transition-transform duration-300 "
            >
              送出預約資料
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConnectUs;
