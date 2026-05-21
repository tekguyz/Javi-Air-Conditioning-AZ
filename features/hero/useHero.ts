import { useState } from 'react';
import { submitLead } from '@/app/actions';

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

export const useHero = () => {
  const [status, setStatus] = useState<SubmissionState>('idle');

  const submitFormAction = async (formData: FormData) => {
    setStatus('submitting');
    
    try {
      const response = await submitLead(formData);
      if (response.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return {
    status,
    submitFormAction
  };
};
