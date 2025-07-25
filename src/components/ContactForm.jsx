import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaUser, FaEnvelope, FaPhone, FaComment, FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Contact form data:', data);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-base-100 rounded-2xl shadow-xl p-8">
      <h3 className="text-2xl font-bold mb-6 text-center">Send us a Message</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center gap-2">
                <FaUser className="text-primary" />
                Full Name *
              </span>
            </label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`}
              placeholder="Your full name"
            />
            {errors.name && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.name.message}</span>
              </label>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                Email *
              </span>
            </label>
            <input
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address'
                }
              })}
              className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.email.message}</span>
              </label>
            )}
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text flex items-center gap-2">
              <FaPhone className="text-primary" />
              Phone Number
            </span>
          </label>
          <input
            type="tel"
            {...register('phone')}
            className="input input-bordered w-full"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text flex items-center gap-2">
              <FaComment className="text-primary" />
              Message *
            </span>
          </label>
          <textarea
            {...register('message', { required: 'Message is required' })}
            className={`textarea textarea-bordered w-full h-32 resize-none ${errors.message ? 'textarea-error' : ''}`}
            placeholder="Tell us how we can help you..."
          ></textarea>
          {errors.message && (
            <label className="label">
              <span className="label-text-alt text-error">{errors.message.message}</span>
            </label>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full"
        >
          {isSubmitting ? (
            <>
              <span className="loading loading-spinner loading-sm"></span>
              Sending...
            </>
          ) : (
            <>
              <FaPaperPlane />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;