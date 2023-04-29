// component for the tracker form that is used to add a new school to the track and add all the information about the school to the database
// this component is used in the Tracker.js component

import React, { useState } from 'react';
import classes from './TrackerForm.module.css';
import { addForm } from '../../../utils/getData';
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../../pages/Loader';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';
const TrackerForm = () => {
  const navigate = useNavigate();
  const [inputs, setinputs] = useState({
    school_name: '',
    school_id: '',
    school_level: '',
    security_safety: {
      labs: null,
      cabins: null,
      building: null,
      wall: null,
      external_factors: null,
      security_factors: {
        fire_line: null,
        tanks: null,
        buckets: null,
        fire_extinguishers: null,
      },
    },
    teachers: {
      material_one: {
        name: 'عربي',
        increase: null,
        decrease: null,
      },
    },
    students_affairs: {
      first_class: {
        registered: null,
        present: null,
        absent: null,
      },
      transfers_to_school: null,
      transfers_from_school: null,
      transferred_files: null,
    },
    workers_affairs: {
      registered: null,
      present: null,
      absent: null,
      negatives: null,
    },
    strategic_planning: {
      obstacles: null,
      plan_activation: null,
      team_building: null,
      plan: null,
      analysis: null,
    },
    administration: {
      execution_plan: null,
      team_building: null,
      analysis: null,
      activities_activation: null,
      obstacles: null,
      predicted_crisis: null,
      communication_system: null,
      risks_indicators: null,
      plan: null,
      training_on_plan: null,
    },
    training: {
      teachers_training: null,
      training_plan: null,
      training_plan_activation: null,
    },
    nutrition: {
      daily_received: null,
      daily_served: null,
      disciplined_distribution: null,
      health_certificate: null,
      not_stored_periods: null,
    },
    cooperative: {
      existing_authorized_items: null,
      drag_running: null,
      drag_profits: null,
    },
    laboratories: {
      work_validity: null,
      ory_association: null,
      networks: null,
      computers: null,
      evaluation: null,
      tilo: null,
    },
    decentralization: {
      board_of_trustees: null,
      decentralization_committee: null,
      settlement: null,
      exchange: null,
      plan: null,
      append: null,
    },
    production_unit: {
      profit_distribution: null,
      supply: null,
      activation: null,
      certified: null,
    },
    environment_population: {
      toilets_health_procedures: null,
      health_file: null,
      diagnosis_health_plan: null,
      check_health_plan: null,
      activities: null,
      labs_health_procedures: null,
    },
    quality: {
      first_year_one: null,
      second_year_one: null,
      third_year_one: null,
      first_year_two: null,
      second_year_two: null,
      third_year_two: null,
      first_year_three: null,
      second_year_three: null,
      third_year_three: null,
    },
  });
  // check if the form is loading or not
  const [isLoading, setIsLoading] = useState();

  // function to handle the submit of the form
  const addFormHandler = async event => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await addForm(inputs).then(response => {
        setIsLoading(false);
        console.log(response);
        if (response.error === true) {
          toast.error('حاول مره اخري', {});
        } else {
          toast.success('تم اضافة المدرسه بنجاح', {});
          setIsLoading(false);
          setTimeout(() => {
            navigate('/');
          }, 5000);
        }
      });
    } catch (error) {
      toast.error('حاول مره اخري', {});
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.contaner}>
      <ToastContainer />
      {isLoading && (
        <div className={classes.loader}>
          <Loader />
        </div>
      )}
      <form className={classes.form} onSubmit={addFormHandler}>
        <div className={classes.field}>
          <h4>بيانات المدرسه</h4>
          <div className={classes.inputs}>
            <div className='input-label'>
              <label htmlFor=''>الرقم التعريفي</label>
              <input
                onChange={e =>
                  setinputs({
                    ...inputs,
                    school_id: e.target.value,
                  })
                }
                id='school_id'
                type='text'
              />
            </div>
            <div className='input-label'>
              <label htmlFor=''>المرحله</label>
              <input
                onChange={e =>
                  setinputs({
                    ...inputs,
                    school_level: e.target.value,
                  })
                }
                id='school_level'
                type='text'
              />
            </div>
            <div className='input-label'>
              <label htmlFor=''>اسم المدرسه</label>
              <input
                onChange={e =>
                  setinputs({
                    ...inputs,
                    school_name: e.target.value,
                  })
                }
                id='school_name'
                type='text'
              />
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>شئون طلبة</h4>
          <h5>الطلبه</h5>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>الحاضر</label>
                <input
                  placeholder='0'
                  id='students_affairs-first_class-present'
                  type='number'
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      students_affairs: {
                        ...inputs.students_affairs,
                        first_class: {
                          ...inputs.students_affairs.first_class,
                          present: e.target.value,
                        },
                      },
                    })
                  }
                />
              </div>
              <div className='input-label'>
                <label htmlFor=''>المقيد</label>
                <input
                  placeholder='0'
                  id='students_affairs-first_class-registered'
                  type='number'
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      students_affairs: {
                        ...inputs.students_affairs,
                        first_class: {
                          ...inputs.students_affairs.first_class,
                          registered: e.target.value,
                        },
                      },
                    })
                  }
                />
              </div>
              <h6>الصف الاول</h6>
            </div>
          </div>
          <h5>التحويلات</h5>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  value={'غير منضبط'}
                  placeholder='"غير منضبط"'
                  checked={
                    inputs.students_affairs.transferred_files === 'غير منضبط'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      students_affairs: {
                        ...inputs.students_affairs,
                        transferred_files: 'غير منضبط',
                      },
                    })
                  }
                  name='students_affairs-transferred_files'
                  id='students_affairs-transferred_files'
                  type='checkbox'
                />
                <label htmlFor=''> غير منضبط</label>
              </div>
              <div className={classes.input}>
                <input
                  placeholder='0'
                  checked={
                    inputs.students_affairs.transferred_files === 'منضبط'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      students_affairs: {
                        ...inputs.students_affairs,
                        transferred_files: 'منضبط',
                      },
                    })
                  }
                  name='students_affairs-transferred_files'
                  id='students_affairs-transferred_files'
                  type='checkbox'
                />
                <label htmlFor=''> منضبط</label>
              </div>
              <h6>ملفات التحويل</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>الي</label>
                <input
                  placeholder='0'
                  id='students_affairs-transfers_to_school'
                  type='number'
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      students_affairs: {
                        ...inputs.students_affairs,
                        transfers_to_school: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className='input-label'>
                <label htmlFor=''>من</label>
                <input
                  placeholder='0'
                  id='students_affairs-transfers_from_school'
                  type='number'
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      students_affairs: {
                        ...inputs.students_affairs,
                        transfers_from_school: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>شئون عاملين</h4>
          <h5>عاملين</h5>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>الحاضر</label>
                <input
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      workers_affairs: {
                        ...inputs.workers_affairs,
                        present: e.target.value,
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='number'
                />
              </div>
              <div className='input-label'>
                <label htmlFor=''>المقيد</label>
                <input
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      workers_affairs: {
                        ...inputs.workers_affairs,
                        registered: e.target.value,
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='number'
                />
              </div>
            </div>
          </div>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      workers_affairs: {
                        ...inputs.workers_affairs,
                        negatives: e.target.checked ? 'لا يوجد' : 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> نعم</label>
              </div>

              <h6> يوجد سلبيه</h6>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>الامن و السلامه</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.security_safety.external_factors === 'غير منضبط'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        external_factors: 'غير منضبط',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> غير منضبط</label>
                <input
                  checked={inputs.security_safety.external_factors === 'منضبط'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        external_factors: 'منضبط',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> منضبط</label>
                <h6> عوامل خارجيه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.security_safety.wall === 'غير منضبط'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        wall: 'غير منضبط',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> غير منضبط</label>
                <input
                  checked={inputs.security_safety.wall === 'منضبط'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        wall: 'منضبط',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> منضبط</label>
                <h6> سور</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.security_safety.building === 'غير منضبط'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        building: 'غير منضبط',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> غير منضبط</label>
                <input
                  checked={inputs.security_safety.building === 'منضبط'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        building: 'منضبط',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> منضبط</label>
                <h6> مبني</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.security_safety.cabins === 'غير منضبط'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        cabins: 'غير منضبط',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> غير منضبط</label>
                <input
                  checked={inputs.security_safety.cabins === 'منضبط'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        cabins: 'منضبط',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> منضبط</label>
                <h6> حجرات</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.security_safety.labs === 'غير منضبط'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        labs: 'غير منضبط',
                      },
                    })
                  }
                  placeholder='"غير منضبط"'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> غير منضبط</label>
                <input
                  checked={inputs.security_safety.labs === 'منضبط'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        labs: 'منضبط',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> منضبط</label>
                <h6> معامل</h6>
              </div>
            </div>
          </div>
          <h5>عوامل الامن</h5>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.security_safety.security_factors
                      .fire_extinguishers === 'غير صالح'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        security_factors: {
                          ...inputs.security_safety.security_factors,
                          fire_extinguishers: 'غير صالح',
                        },
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> غير صالح</label>
                <input
                  checked={
                    inputs.security_safety.security_factors
                      .fire_extinguishers === 'صالح'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        security_factors: {
                          ...inputs.security_safety.security_factors,
                          fire_extinguishers: 'صالح',
                        },
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> صالح</label>
                <h6> طفايات</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.security_safety.security_factors.buckets ===
                    'غير صالح'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        security_factors: {
                          ...inputs.security_safety.security_factors,
                          buckets: 'غير صالح',
                        },
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> غير صالح</label>
                <input
                  checked={
                    inputs.security_safety.security_factors.buckets === 'صالح'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        security_factors: {
                          ...inputs.security_safety.security_factors,
                          buckets: 'صالح',
                        },
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> صالح</label>
                <h6> جرادل</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.security_safety.security_factors.tanks === 'غير صالح'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        security_factors: {
                          ...inputs.security_safety.security_factors,
                          tanks: 'غير صالح',
                        },
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> غير صالح</label>
                <input
                  checked={
                    inputs.security_safety.security_factors.tanks === 'صالح'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        security_factors: {
                          ...inputs.security_safety.security_factors,
                          tanks: 'صالح',
                        },
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> صالح</label>
                <h6> خزانات</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.security_safety.security_factors.fire_line ===
                    'غير صالح'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        security_factors: {
                          ...inputs.security_safety.security_factors,
                          fire_line: 'غير صالح',
                        },
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> غير صالح</label>
                <input
                  checked={
                    inputs.security_safety.security_factors.fire_line === 'صالح'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      security_safety: {
                        ...inputs.security_safety,
                        security_factors: {
                          ...inputs.security_safety.security_factors,
                          fire_line: 'صالح',
                        },
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> صالح</label>
                <h6> خط حريق</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>التغذيه</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  checked={inputs.nutrition.health_certificate === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      nutrition: {
                        ...inputs.nutrition,
                        health_certificate: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.nutrition.health_certificate === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      nutrition: {
                        ...inputs.nutrition,
                        health_certificate: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> شهاده صحيه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.nutrition.disciplined_distribution === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      nutrition: {
                        ...inputs.nutrition,
                        disciplined_distribution: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.nutrition.disciplined_distribution === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      nutrition: {
                        ...inputs.nutrition,
                        disciplined_distribution: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> انضباط التوزيع</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.nutrition.daily_served === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      nutrition: {
                        ...inputs.nutrition,
                        daily_served: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.nutrition.daily_served === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      nutrition: {
                        ...inputs.nutrition,
                        daily_served: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> يتم التوزيع بشكل يومي</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.nutrition.daily_received === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      nutrition: {
                        ...inputs.nutrition,
                        daily_received: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.nutrition.daily_received === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      nutrition: {
                        ...inputs.nutrition,
                        daily_received: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> يتم الاستلام بشكل يومي</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.nutrition.not_stored_periods === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      nutrition: {
                        ...inputs.nutrition,
                        not_stored_periods: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.nutrition.not_stored_periods === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      nutrition: {
                        ...inputs.nutrition,
                        not_stored_periods: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> لا يتم التخزين لفترات</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>الجمعيه التعاونيه</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  checked={inputs.cooperative.drag_profits === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      cooperative: {
                        ...inputs.cooperative,
                        drag_profits: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.cooperative.drag_profits === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      cooperative: {
                        ...inputs.cooperative,
                        drag_profits: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> السحب للارباح</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.cooperative.drag_running === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      cooperative: {
                        ...inputs.cooperative,
                        drag_running: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.cooperative.drag_running === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      cooperative: {
                        ...inputs.cooperative,
                        drag_running: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> السحب للتشغيل </h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.cooperative.existing_authorized_items === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      cooperative: {
                        ...inputs.cooperative,
                        existing_authorized_items: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={
                    inputs.cooperative.existing_authorized_items === 'يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      cooperative: {
                        ...inputs.cooperative,
                        existing_authorized_items: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label tmlFor=''> يوجد</label>
                <h6> الاصناف الموجوده مصرح بيها</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>الجوده</h4>
          <h5>الصف الاول</h5>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>نسبه النحاح</label>
                <input
                  placeholder='0'
                  id='students_affairs-first_class-present'
                  type='number'
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      quality: {
                        ...inputs.quality,
                        first_year_three: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <h6>العام الثالث</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>نسبه النحاح</label>
                <input
                  placeholder='0'
                  id='students_affairs-first_class-present'
                  type='number'
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      quality: {
                        ...inputs.quality,
                        first_year_two: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <h6>العام الثاني</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>نسبه النحاح</label>
                <input
                  placeholder='0'
                  id='students_affairs-first_class-present'
                  type='number'
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      quality: {
                        ...inputs.quality,
                        first_year_one: e.target.value,
                      },
                    })
                  }
                />
              </div>

              <h6>العام الاول</h6>
            </div>
          </div>
          <h5>الصف الثاني</h5>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>نسبه النحاح</label>
                <input
                  placeholder='0'
                  id='students_affairs-first_class-present'
                  type='number'
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      quality: {
                        ...inputs.quality,
                        second_year_three: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <h6>العام الثالث</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>نسبه النحاح</label>
                <input
                  placeholder='0'
                  id='students_affairs-first_class-present'
                  type='number'
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      quality: {
                        ...inputs.quality,
                        second_year_two: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <h6>العام الثاني</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>نسبه النحاح</label>
                <input
                  placeholder='0'
                  id='students_affairs-first_class-present'
                  type='number'
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      quality: {
                        ...inputs.quality,
                        second_year_one: e.target.value,
                      },
                    })
                  }
                />
              </div>

              <h6>العام الاول</h6>
            </div>
          </div>
          <h5>الصف الثالث</h5>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>نسبه النحاح</label>
                <input
                  placeholder='0'
                  id='students_affairs-first_class-present'
                  type='number'
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      quality: {
                        ...inputs.quality,
                        third_year_three: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <h6>العام الثالث</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>نسبه النحاح</label>
                <input
                  placeholder='0'
                  id='students_affairs-first_class-present'
                  type='number'
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      quality: {
                        ...inputs.quality,
                        third_year_two: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <h6>العام الثاني</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>نسبه النحاح</label>
                <input
                  placeholder='0'
                  id='students_affairs-first_class-present'
                  type='number'
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      quality: {
                        ...inputs.quality,
                        third_year_one: e.target.value,
                      },
                    })
                  }
                />
              </div>

              <h6>العام الاول</h6>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>التدريب</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  checked={inputs.training.training_plan === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      training: {
                        ...inputs.training,
                        training_plan: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.training.training_plan === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      training: {
                        ...inputs.training,
                        training_plan: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> خطه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.training.training_plan_activation === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      training: {
                        ...inputs.training,
                        training_plan_activation: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.training.training_plan_activation === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      training: {
                        ...inputs.training,
                        training_plan_activation: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> خطه مفعله </h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.training.teachers_training === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      training: {
                        ...inputs.training,
                        teachers_training: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.training.teachers_training === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      training: {
                        ...inputs.training,
                        teachers_training: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> تدريب المعلمين</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>المعامل</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <div className='input-label'>
                  <label htmlFor=''>العدد</label>
                  <input
                    onChange={e =>
                      setinputs({
                        ...inputs,
                        laboratories: {
                          ...inputs.laboratories,
                          tilo: e.target.value,
                        },
                      })
                    }
                    placeholder='0'
                    id='schoolInf_level'
                    type='number'
                  />
                </div>
                <h6> Tilo</h6>
              </div>
              <div className={classes.input}>
                <div className='input-label'>
                  <label htmlFor=''>العدد</label>
                  <input
                    onChange={e =>
                      setinputs({
                        ...inputs,
                        laboratories: {
                          ...inputs.laboratories,
                          evaluation: e.target.value,
                        },
                      })
                    }
                    placeholder='0'
                    id='schoolInf_level'
                    type='number'
                  />
                </div>
                <h6> تطور</h6>
              </div>
              <div className={classes.input}>
                <div className='input-label'>
                  <label htmlFor=''>العدد</label>
                  <input
                    onChange={e =>
                      setinputs({
                        ...inputs,
                        laboratories: {
                          ...inputs.laboratories,
                          computers: e.target.value,
                        },
                      })
                    }
                    placeholder='0'
                    id='schoolInf_level'
                    type='number'
                  />
                </div>
                <h6> حاسب الي</h6>
              </div>
              <div className={classes.input}>
                <div className='input-label'>
                  <label htmlFor=''>العدد</label>
                  <input
                    onChange={e =>
                      setinputs({
                        ...inputs,
                        laboratories: {
                          ...inputs.laboratories,
                          networks: e.target.value,
                        },
                      })
                    }
                    placeholder='0'
                    id='schoolInf_level'
                    type='number'
                  />
                </div>
                <h6> شبكات</h6>
              </div>
              <div className={classes.input}>
                <div className='input-label'>
                  <label htmlFor=''>العدد</label>
                  <input
                    onChange={e =>
                      setinputs({
                        ...inputs,
                        laboratories: {
                          ...inputs.laboratories,
                          ory_association: e.target.value,
                        },
                      })
                    }
                    placeholder='0'
                    id='schoolInf_level'
                    type='number'
                  />
                </div>
                <h6> اتحاد اوري</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.laboratories.work_validity === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      laboratories: {
                        work_validity: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد اعطال</label>
                <input
                  checked={inputs.laboratories.work_validity === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      laboratories: {
                        work_validity: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد اعطال</label>
                <h6> صلاحيه العمل</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>المعلمين</h4>
          <h5>المواد</h5>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>عجز</label>
                <input
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      teachers: {
                        ...inputs.teachers,
                        material_one: {
                          ...inputs.teachers.material_one,
                          increase: e.target.value,
                        },
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='number'
                />
              </div>
              <div className='input-label'>
                <label htmlFor=''>زياده</label>
                <input
                  onChange={e =>
                    setinputs({
                      ...inputs,
                      teachers: {
                        ...inputs.teachers,
                        material_one: {
                          ...inputs.teachers.material_one,
                          decrease: e.target.value,
                        },
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='number'
                />
              </div>
              <h6>ماده</h6>
            </div>
            {/* <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>عجز</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <div className='input-label'>
                <label htmlFor=''>زياده</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <h6>ماده</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>عجز</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <div className='input-label'>
                <label htmlFor=''>زياده</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <h6>ماده</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>عجز</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <div className='input-label'>
                <label htmlFor=''>زياده</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <h6>ماده</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>عجز</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <div className='input-label'>
                <label htmlFor=''>زياده</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <h6>ماده</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>عجز</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <div className='input-label'>
                <label htmlFor=''>زياده</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <h6>ماده</h6>
            </div>
            <div className={classes.input}>
              <div className='input-label'>
                <label htmlFor=''>عجز</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <div className='input-label'>
                <label htmlFor=''>زياده</label>
                <input placeholder='0' id='schoolInf_level' type='number' />
              </div>
              <h6>ماده</h6>
            </div> */}
          </div>
        </div>
        <div className={classes.field}>
          <h4>الامركزيه</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  checked={inputs.decentralization.plan === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        plan: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.decentralization.plan === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        plan: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> خطه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.decentralization.exchange === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        exchange: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.decentralization.exchange === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        exchange: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> الصرف</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.decentralization.settlement === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        settlement: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.decentralization.settlement === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        settlement: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> التسويه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.decentralization.decentralization_committee ===
                    'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        decentralization_committee: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={
                    inputs.decentralization.decentralization_committee ===
                    'يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        decentralization_committee: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> لجنه الامركزيه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.decentralization.board_of_trustees === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        board_of_trustees: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.decentralization.board_of_trustees === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        board_of_trustees: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> محضر اجتماع مجلس الامناء</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.decentralization.append === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        append: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.decentralization.append === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      decentralization: {
                        ...inputs.decentralization,
                        append: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> الالحاق</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>الوحده المنتجه</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              {/* <div className={classes.input}>
                <input
                  checked={inputs.production_unit.append === 0}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      production_unit: {
                        ...inputs.production_unit,
                        append: 0,
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input placeholder='0' id='schoolInf_level' type='checkbox' />
                <label htmlFor=''> يوجد</label>
                <h6> خطه</h6>
              </div> */}
              <div className={classes.input}>
                <input
                  checked={inputs.production_unit.certified === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      production_unit: {
                        ...inputs.production_unit,
                        certified: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.production_unit.certified === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      production_unit: {
                        ...inputs.production_unit,
                        certified: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> معتمد من التوجيه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.production_unit.activation === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      production_unit: {
                        ...inputs.production_unit,
                        activation: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.production_unit.activation === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      production_unit: {
                        ...inputs.production_unit,
                        activation: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> تم تفعيل النشاط</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.production_unit.supply === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      production_unit: {
                        ...inputs.production_unit,
                        supply: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.production_unit.supply === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      production_unit: {
                        ...inputs.production_unit,
                        supply: 'يوجد',
                      },
                    })
                  }
                  placeholder='"لا يوجد"'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> التوريد</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.production_unit.profit_distribution === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      production_unit: {
                        ...inputs.production_unit,
                        profit_distribution: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={
                    inputs.production_unit.profit_distribution === 'يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      production_unit: {
                        ...inputs.production_unit,
                        profit_distribution: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> توزيع الارباح</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>التخطيط الاستراتيجي</h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  checked={inputs.strategic_planning.plan === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      strategic_planning: {
                        ...inputs.strategic_planning,
                        plan: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.strategic_planning.plan === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      strategic_planning: {
                        ...inputs.strategic_planning,
                        plan: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> خطه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.strategic_planning.team_building === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      strategic_planning: {
                        ...inputs.strategic_planning,
                        team_building: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.strategic_planning.team_building === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      strategic_planning: {
                        ...inputs.strategic_planning,
                        team_building: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> يوجد تشكيل فريق</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.strategic_planning.plan_activation === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      strategic_planning: {
                        ...inputs.strategic_planning,
                        plan_activation: 0,
                      },
                    })
                  }
                  placeholder='"لا يوجد"'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.strategic_planning.plan_activation === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      strategic_planning: {
                        ...inputs.strategic_planning,
                        plan_activation: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> يتم تفعيل الانشطه حسب الخطه الزمنيه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.strategic_planning.obstacles === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      strategic_planning: {
                        ...inputs.strategic_planning,
                        obstacles: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.strategic_planning.obstacles === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      strategic_planning: {
                        ...inputs.strategic_planning,
                        obstacles: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> معوقات تطبيق</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.strategic_planning.analysis === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      strategic_planning: {
                        ...inputs.strategic_planning,
                        analysis: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.strategic_planning.analysis === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      strategic_planning: {
                        ...inputs.strategic_planning,
                        analysis: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> يوجد تحليل للوضع الراهن</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4>البيئه و السكان </h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.environment_population.check_health_plan ===
                    'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        check_health_plan: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={
                    inputs.environment_population.check_health_plan === 'يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        check_health_plan: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> خطه للفحص الطبي</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.environment_population.diagnosis_health_plan ===
                    'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        diagnosis_health_plan: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={
                    inputs.environment_population.diagnosis_health_plan ===
                    'يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        diagnosis_health_plan: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> خطه للتشخيص الطبي</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.environment_population.health_file === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        health_file: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.environment_population.health_file === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        health_file: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> ملف عن الوضع الصحي</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.environment_population.toilets_health_procedures ===
                    'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        toilets_health_procedures: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={
                    inputs.environment_population.toilets_health_procedures ===
                    'يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        toilets_health_procedures: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> الإجراءات الصحيه في دورات المياه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.environment_population.labs_health_procedures ===
                    'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        labs_health_procedures: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={
                    inputs.environment_population.labs_health_procedures ===
                    'يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        labs_health_procedures: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> الإجراءات الصحيه في المعامل</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.environment_population.activities === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        activities: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.environment_population.activities === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      environment_population: {
                        ...inputs.environment_population,
                        activities: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> انشطه البيئه و السكان</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.field}>
          <h4> الاداره </h4>
          <div className={classes.inputs}>
            <div className={classes.input}>
              <div className={classes.input}>
                <input
                  checked={inputs.administration.execution_plan === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        execution_plan: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.administration.execution_plan === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        execution_plan: 'يوجد',
                      },
                    })
                  }
                  placeholder='"لا يوجد"'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> خطه تنفيذ</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.administration.team_building === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        team_building: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.administration.team_building === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        team_building: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6> تشكيل لفريق تخطيط</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.administration.analysis === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        analysis: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.administration.analysis === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        analysis: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6>تحليل الوضع الراهن</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.administration.activities_activation === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        activities_activation: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={
                    inputs.administration.activities_activation === 'يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        activities_activation: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6>تفعيل الانشطه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.administration.obstacles === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        obstacles: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.administration.obstacles === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        obstacles: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6>معوقات للتطبيق</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.administration.predicted_crisis === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        predicted_crisis: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.administration.predicted_crisis === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        predicted_crisis: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6>تصور للازمات المحتمله</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={
                    inputs.administration.communication_system === 'لا يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        communication_system: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={
                    inputs.administration.communication_system === 'يوجد'
                  }
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        communication_system: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6>نظام اتصال</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.administration.risks_indicators === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        risks_indicators: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.administration.risks_indicators === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        risks_indicators: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6>موشرات علي المخاطر</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.administration.plan === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        plan: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.administration.plan === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        plan: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6>يوجد خطه</h6>
              </div>
              <div className={classes.input}>
                <input
                  checked={inputs.administration.training_on_plan === 'لا يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        training_on_plan: 'لا يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> لا يوجد</label>
                <input
                  checked={inputs.administration.training_on_plan === 'يوجد'}
                  onChange={() =>
                    setinputs({
                      ...inputs,
                      administration: {
                        ...inputs.administration,
                        training_on_plan: 'يوجد',
                      },
                    })
                  }
                  placeholder='0'
                  id='schoolInf_level'
                  type='checkbox'
                />
                <label htmlFor=''> يوجد</label>
                <h6>تدريب علي الخطه</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.btn}>
          <button disabled={inputs.school_id ? false : true} className='btn'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrackerForm;