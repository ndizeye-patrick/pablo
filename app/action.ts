'use server'

import { revalidatePath } from 'next/cache';

export async function submitReport(formData: FormData) {
  // Simulate a delay to represent processing time
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Extract form data
  const report = {
    italieni: formData.get('italieni'),
    amazing: formData.get('amazing'),
    bral: formData.get('bral'),
    ibigori: {
      bishyashya: formData.get('ibigori_bishyashya'),
      imifuka: formData.get('ibigori_imifuka'),
      ibiro: formData.get('ibigori_ibiro'),
    },
    ibigoribishanzwe: {
      imifuka: formData.get('ibigoribishanzwe_imifuka'),
      ibiro: formData.get('ibigoribishanzwe_ibiro'),
    },
    ton: formData.get('ton'),
    igiteranyo: {
      cyibigori: formData.get('igiteranyo_cyibigori'),
      kimifuka: formData.get('igiteranyo_kimifuka'),
      kibiro: formData.get('igiteranyo_kibiro'),
    },
    igiteracyatungi: formData.get('igiteracyatungi'),
    comment: formData.get('comment'),
  };

  console.log('Submitted report:', report);

  // Revalidate the page to show updated data
  revalidatePath('/');

  return {
    success: true,
    message: 'Awesome job! Your report done 🚀✨',
  };
}
