import './whitepapercss/paragraphonecss.scss'
import Wrapper from './Wrapper'

export default function ParagraphOne(){

    return(
        <div className='whitepaper'>
        
            <h1>CSS attempts at text with inline skewed background</h1>
<p class="gray">Update: Some corrections and elaborations on 18/02/2019.</p>

<h2>Notes:</h2>
<ul class="gray">
    <li>Using skew is only rendered if the item is display block or inline-block.</li>
    <li>Some of these look the same on a wide viewport but fail differently as the viewport width is decreased.</li>
</ul>


<section className='section' >
<h2>Attempt 1 - only use 1 element</h2>
<ul>
  <li>🤷‍♀️ Text will be skewed the same as the background. Don't know how to straighten the text, if straight text is desired.</li>
  <li>⚠️ If multiline, preceding and following text is ejected to the next line even if there is space for it inline.</li>
  <li>✅ Text always stays within background.</li>
</ul>
<p class="attempt-1">Some text with some <em>skewed words</em> in the middle.</p>
<p class="attempt-1">Lorem ipsum dolor sit amet, consectetur <em>adipisicing elit. Assumenda, eius consequuntur. Culpa possimus rem quibusdam odit facilis dolorum mollitia, voluptates</em> sapiente dolor doloribus quos nam quasi, repellendus blanditiis saepe fuga.</p>
</section>
  
<section className='section' >
<h2>Attempt 2 - 1 element and a pseudo element</h2>
<ul>
  <li>⚠️ If multiline, preceding and following text is ejected to the next line.</li>
  <li>⚠️ Multi line text like this won't always sit on the background properly or will escape outside the background.</li>
  <li>⚠️ Some weird z-index to get the background behind the text.</li>
</ul>
<p class="attempt-2">Some text with some <em>skewed words</em> in the middle.</p>
<p class="attempt-2">Lorem ipsum dolor sit amet, consectetur <em>adipisicing elit. Assumenda, eius consequuntur. Culpa possimus rem quibusdam odit facilis dolorum mollitia, voluptates</em> sapiente dolor doloribus quos nam quasi, repellendus blanditiis saepe fuga.</p></section>

<br />
<section className='section' >
<Wrapper />
<h1 className='glow'>Whitepaper</h1>
<h2>Attempt 3 - 1 element, box-decoration-break: clone</h2>
<ul>
  <li>🛑 No skew - seems to be ignored on inline elements (in Webkit at least).</li>
  <li>✅ Multi line consistency</li>
  <li>✅ No multiline following text eject to next line.</li>
  <li>⚠️ If multiline, following lines can cover the decenders of previous line's characters.</li>
  <li>⚠️ Poor multiline left-to-right gradient background color; visible lines in most cases.</li>
</ul>
<p class="attempt-3">Some text with some <em>skewed words</em> in the middle.</p>
<p class="attempt-3">Lorem ipsum dolor sit amet, consectetur <em>adipisicing elit. Assumenda, eius consequuntur. Culpa possimus rem quibusdam odit facilis dolorum mollitia, voluptates</em> sapiente dolor doloribus quos nam quasi, repellendus blanditiis saepe fuga.</p></section>
  
<section className='section' >
<h2>Attempt 4 - double wrapping elements</h2>
<ul>
  <li>✅ Avoids pseudo element z-index issues.</li>
  <li>🤷‍♂️ Don't know if double skewing elements causes subtle text rendering changes</li>
  <li>⚠️ If multiline, preceding and following text is ejected to the next line.</li>
</ul>
<p class="attempt-4">Some text with some <em><span>skewed words</span></em> in the middle.</p>
<p class="attempt-4">Lorem ipsum dolor sit amet, consectetur <em><span>adipisicing elit. Assumenda, eius consequuntur. Culpa possimus rem quibusdam odit facilis dolorum mollitia, voluptates</span></em> sapiente dolor doloribus quos nam quasi, repellendus blanditiis saepe fuga.</p>
</section>
  
<section className='section' >
<h2>Attempt 5 - double pseudo elements at ends</h2>
<ul>
  <li>⚠️ Poor multiline rendering. Pseudo elements don't always line up nicely. Can cause sharp corners or gaps.</li>
  <li>⚠️ If multiline, preceding and following text is ejected to the next line.</li>
</ul>
<p class="attempt-5">Some text with some <em>skewed words</em> in the middle.</p>
<p class="attempt-5">Lorem ipsum dolor sit amet, consectetur <em>adipisicing elit. Assumenda, eius consequuntur. Culpa possimus rem quibusdam odit facilis dolorum mollitia, voluptates</em> sapiente dolor doloribus quos nam quasi, repellendus blanditiis saepe fuga.</p>
</section>

        </div>
    )
}