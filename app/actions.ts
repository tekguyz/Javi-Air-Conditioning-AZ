'use server';

export async function submitLead(formData: FormData) {
  const name = formData.get('name');
  const phone = formData.get('phone');
  
  // Here we would integrate with an email transport or CRM to send to javi.airconditioning@gmail.com
  // console.log(`New lead received: ${name} - ${phone}`);
  
  // Simulated transmission delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return { success: true };
}
