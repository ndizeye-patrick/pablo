'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitReport } from '../app/action';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Loader2, Rocket, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReportForm() {
  const [state, setState] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(event.target); // Create FormData from the form

    setIsSubmitting(true);
    try {
      const response = await submitReport(formData); // Call the submitReport function
      setState(response); // Set the response state for success or error message
    } catch (error) {
      console.error('Submission error:', error);
      setState({ success: false, message: 'Submission failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg shadow-lg">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-indigo-700">Report</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="italieni" className="text-indigo-600 font-medium">Itariki</Label>
            <Input id="italieni" type="date" name="italieni" className="w-full border-indigo-300 text-black focus:ring-indigo-500 rounded-md" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="amazing" className="text-indigo-600 font-medium">Amazina</Label>
            <Input id="amazing" name="amazing" type="text" className="w-full border-indigo-300 text-black focus:ring-indigo-500 rounded-md" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bral" className="text-indigo-600 font-medium">PRAKE</Label>
            <Input id="bral" name="bral" type="text" className="w-full border-indigo-300  text-black focus:ring-indigo-500 rounded-md" />
          </div>
        </div>

        <fieldset className="bg-white p-4 rounded-md shadow-md">
          <legend className="text-lg font-semibold mb-2 text-indigo-700">Ibigori Bishyashya</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ibigori_imifuka" className="text-indigo-600 font-medium">Imifuka</Label>
              <Input id="ibigori_imifuka" name="ibigori_imifuka" type="number" className="w-full text-black border-indigo-300 focus:ring-indigo-500 rounded-md" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ibigori_ibiro" className="text-indigo-600 font-medium">Ibiro</Label>
              <Input id="ibigori_ibiro" name="ibigori_ibiro" type="number" className="w-full text-black border-indigo-300 focus:ring-indigo-500 rounded-md" />
            </div>
          </div>
        </fieldset>

        <fieldset className="bg-white p-4 rounded-md shadow-md">
          <legend className="text-lg font-semibold mb-2 text-indigo-700">Ibigori Bishanzwe</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ibigoribishanzwe_imifuka" className="text-indigo-600 font-medium">Imifuka</Label>
              <Input id="ibigoribishanzwe_imifuka" name="ibigoribishanzwe_imifuka" type="number" className="text-black w-full border-indigo-300 focus:ring-indigo-500 rounded-md" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ibigoribishanzwe_ibiro" className="text-indigo-600 font-medium">Ibiro</Label>
              <Input id="ibigoribishanzwe_ibiro" name="ibigoribishanzwe_ibiro" type="number" className="text-black w-full border-indigo-300 focus:ring-indigo-500 rounded-md" />
            </div>
          </div>
        </fieldset>

        <div className="space-y-2">
          <Label htmlFor="ton" className="text-indigo-600 font-medium">Ton</Label>
          <Input id="ton" name="ton" type="number" className="w-full border-indigo-300 text-black focus:ring-indigo-500 rounded-md" />
        </div>

        <fieldset className="bg-white p-4 rounded-md shadow-md">
          <legend className="text-lg font-semibold mb-2 text-indigo-700">Igiteranyo cy'ibigori byose</legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="igiteranyo_kimifuka" className="text-indigo-600 font-medium">Kimifuka</Label>
              <Input id="igiteranyo_kimifuka" name="igiteranyo_kimifuka" type="number" className="text-black w-full border-indigo-300 focus:ring-indigo-500 rounded-md" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="igiteranyo_kibiro" className="text-indigo-600 font-medium">Kibiro</Label>
              <Input id="igiteranyo_kibiro" name="igiteranyo_kibiro" type="number" className="text-black w-full border-indigo-300 focus:ring-indigo-500 rounded-md" />
            </div>
          </div>
        </fieldset>

        <div className="space-y-2">
          <Label htmlFor="igiteracyatungi" className="text-indigo-600 font-medium">Igitera cyatungi</Label>
          <Input id="igiteracyatungi" name="igiteracyatungi" type="number" className="text-black w-full border-indigo-300 focus:ring-indigo-500 rounded-md" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="comment" className="text-indigo-600 font-medium">Comment</Label>
          <Textarea id="comment" name="comment" className="text-black w-full border-indigo-300 focus:ring-indigo-500 rounded-md" />
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          {isSubmitting ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <Rocket className="mr-2 h-5 w-5" />
          )}
          {isSubmitting ? 'Launching Report...' : 'Submit'}
        </Button>
      </form>

      <AnimatePresence>
        {state && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`mt-6 p-4 ${state.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} rounded-lg shadow-md flex items-center justify-center`}
          >
            <CheckCircle className="mr-2 h-5 w-5" />
            {state.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
