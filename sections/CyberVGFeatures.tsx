
export const CyberVGFeatures = () => {
   return (
      <section className="py-16 px-4 md:px-8">
         <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
               Comprehensive Threat Detection & Response
            </h2>
            <p className="text-muted-foreground mx-auto">
               At CyberAssured, we see organizations struggle with increasingly complex IT infrastructures
               made even more challenging by rapidly evolving cyber threats and a lack of human resources.
               CyberVanguard combines powerful SIEM technology driven by AI and machine learning with a
               SOC team to deliver relevant, actionable alerts in real time.
            </p>

            <div className="mt-10 p-6 rounded-2xl bg-muted border border-secondary shadow-xl">
               <h3 className="text-2xl font-semibold mb-6">CyberVanguard Platform Features</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                     'AI-Powered Analysis',
                     'Real-Time Correlation',
                     'Automated Response',
                     'Expert SOC Team',
                     '24/7/365 Monitoring',
                     'Actionable Intelligence',
                  ].map((feature) => (
                     <div
                        key={feature}
                        className="bg-secondary/80 p-3 py-4 rounded-lg flex items-center justify-center text-sm text-secondary-foreground font-medium"
                     >
                        {feature}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};
