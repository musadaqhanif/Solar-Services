export default function SectionHeading({ title, highlightWord, textAlignment = 'center', className = '' }) {
    // Split the title into parts and highlight the specified word
    const parts = title.split(highlightWord);
    return (
      <h2
        className={`text-4xl font-bold mb-4 ${textAlignment === 'left' ? 'text-left' : 'text-center'} ${className}`}
        dangerouslySetInnerHTML={{
          __html: `${parts[0]}<span class="text-green-600">${highlightWord}</span>${parts[1] || ''}`,
        }}
      />
    );
  }