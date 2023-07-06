import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_gtlswfa';
const TEMPLATE_ID = 'template_uqh8ntl';
const PUBLIC_KEY = 'E1WqnJo6dSzbz-mel';

function ConnectUs() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [contactTime, setContactTime] = useState('');
  const [email, setEmail] = useState('');
  const [cost, setCost] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      tel,
      contactTime,
      email,
      cost,
      type,
    };

    try {
      const docRef = doc(db, 'yourCollectionName', 'yourDocumentId');
      await setDoc(docRef, data);

      emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.name,
          to_name: 'LI',
          from_email: data.email,
          to_email: 'shiu2329@gmail.com',
          message: '用戶回填表單:',
          name: data.name,
          tel: data.tel,
          contactTime: data.contactTime,
          email: data.email,
          cost: data.cost,
          type: data.type,
        },
        PUBLIC_KEY
      );

      console.log('Data saved successfully!');
      window.alert('已送出表單，即將導向首頁');
      navigate('/');
    } catch (error) {
      console.error('Error saving data:', error);
      // Handle error here
    }
  };

  return (
    <>
      <div className="flex justify-between items-center flex-col gap-5 h-full">
        <div>
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
                  value={contactTime}
                >
                  <option value="" disabled>
                    請選擇聯繫時間
                  </option>
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
                  value={type}
                >
                  <option value="" disabled>
                    請選擇旅行類別
                  </option>
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
        </div>
        <div className=" w-full max-w-2xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.2521503305175!2d121.7667784!3d24.6838574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3467e5d519d6fd8b%3A0x2b8398e63b00fa5!2zMjY15a6c6Jit57ij576F5p2x6Y6u5oSb5ZyL6LevMTE46Jmf!5e0!3m2!1szh-TW!2stw!4v1688538452711!5m2!1szh-TW!2stw"
            className="w-full h-[500px] p-4"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default ConnectUs;
