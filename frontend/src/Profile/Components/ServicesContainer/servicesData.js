import Health from '../../../Assets/Health.png';
import Fitness from '../../../Assets/Fitness.png';
import Consultation from '../../../Assets/Consultation.png';
import Salon from '../../../Assets/Salon.png';
import Spa from '../../../Assets/Spa.png';
import Counselling from '../../../Assets/Counselling.png';
import Tuition from '../../../Assets/Tuition.png';
import Other from '../../../Assets/Other.png';

export const serviceCategoriesData = [
  { id: 1, category: 'Health', image: Health },
  { id: 2, category: 'Fitness', image: Fitness },
  { id: 3, category: 'Consultation', image: Consultation },
  { id: 4, category: 'Salon And Barber', image: Salon },
  { id: 5, category: 'Massage And Spa', image: Spa },
  { id: 6, category: 'Counselling', image: Counselling },
  { id: 7, category: 'Tuition', image: Tuition },
  { id: 8, category: 'Other', image: Other },
];

export const servicesListData = [
  { id: 1, categoryId: 1, name: 'Tele-Medicine', duration: '30 minutes', cost: 50, openingTime: '09:00', closingTime: '17:00', location: 'Online' },
  { id: 2, categoryId: 2, name: 'Fitness by Aziz', duration: '120 minutes', cost: 100, openingTime: '06:00', closingTime: '10:00', location: 'Smart Gym' },
  { id: 3, categoryId: 3, name: 'MMS Firm', duration: '30 minutes', cost: 50, openingTime: '09:00', closingTime: '17:00', location: 'MMS Head Office' },
  { id: 4, categoryId: 4, name: 'Cutz', duration: '60 minutes', cost: 50, openingTime: '09:00', closingTime: '17:00', location: 'Cutz Salon' },
  { id: 5, categoryId: 5, name: 'Massage', duration: '1 hour', cost: 100, openingTime: '09:00', closingTime: '17:00', location: 'Massage Parlor' },
  { id: 6, categoryId: 6, name: 'Your Therapy Companion', duration: '60 minutes', cost: 100, openingTime: '11:00', closingTime: '11:00 ', location: 'Therapy Center'},
  { id: 7, categoryId: 7, name: 'Mathletes', duration: '60 minutes', cost: 50, openingTime: '09:00', closingTime: '16:00', location: 'Home' },
  { id: 8, categoryId: 5, name: 'Zen space', duration: '60 minutes', cost: 50, openingTime: '10:00', closingTime: '18:00', location: 'Zen Space Center' },
  { id: 9, categoryId: 8, name: 'Zap Electrics', duration: '60 minutes', cost: 50, openingTime: '07:00', closingTime: '17:00', location: 'Home' },
  { id: 10, categoryId: 7, name: 'Science Nerds', duration: '60 minutes', cost: 50, openingTime: '09:00', closingTime: '16:00', location: 'Home' },
  { id: 11, categoryId: 6, name: 'Children Therapy', duration: '60 minutes', cost: 50, openingTime: '09:00', closingTime: '17:00', location: 'Therapy Center' },
  { id: 12, categoryId: 4, name: 'Hair by T', duration: '60 minutes', cost: 50, openingTime: '09:00', closingTime: '17:00', location: 'Hair by T Salon' },
];
