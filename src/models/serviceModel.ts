import mongoose from 'mongoose';

const serviceCategoriesData = [
  'Health',
  'Fitness',
  'Consultation',
  'Salon And Barber',
  'Massage And Spa',
  'Counselling',
  'Tuition',
  'Other',
];

const serviceDaysData = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true,
  },
  durations: [{
    type: Number,
    min: 15,
    max: 480,
    required: true,
  }],
  cost: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: serviceCategoriesData,
  },
  location: {
    type: String,
    required: true,
  },
  workingHours: {
    startHour: {
      type: Number,
      min: 0,
      max: 23,
      required: true,
    },
    startMinute: {
      type: Number,
      min: 0,
      max: 59,
      required: true,
    },
    endHour: {
      type: Number,
      min: 0,
      max: 23,
      required: true,
    },
    endMinute: {
      type: Number,
      min: 0,
      max: 59,
      required: true,
    },
  },
  serviceDays: {
    type: [String],
    required: true,
    enum: serviceDaysData,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business',
    required: true
  }
});


serviceSchema.pre('save', async function (next) {
  const service = this as mongoose.Document & { business: mongoose.Types.ObjectId };
  await mongoose
    .model('Business')
    .updateOne(
      { _id: service.business },
      { $push: { services: service._id } },
    );
  next();
});


serviceSchema.pre(/^remove/, async function (next) {
  const service = this as mongoose.Document;
  await mongoose
    .model('Business')
    .updateMany(
      { services: service._id },
      { $pull: { services: service._id } },
    );
  next();
});

const ServiceModel = mongoose.model('Service', serviceSchema);
export default ServiceModel;