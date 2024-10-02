const paragraph = document.getElementById('paragraph');
const name = document.getElementById('name');
const role = document.getElementById('role');
const image = document.getElementById('image');

const testimonials = [
    {
        paragraph: `
            “ I’ve been interested in coding for a while but never taken the jump, until now.
            I couldn’t recommend this course enough. I’m now in the job of my dreams and so
            excited about the future. ”
        `,
        name: 'Tanya Sinclair',
        role: 'UX Engineer',
        image: 'assets/images/image-tanya.jpg'
    },
    {
        paragraph: `
          “ If you want to lay the best foundation possible I’d recommend taking this course.
            The depth the instructors go into is incredible. I now feel so confident about
            starting up as a professional developer. ”
        `,
        name: 'John Tarkpor',
        role: 'Junior Front-end Developer',
        image: 'assets/images/image-john.jpg'
    }
];

let currentIndex = 0;

function updateTestimonial(index) {
    paragraph.textContent = testimonials[index].paragraph;
    name.textContent = testimonials[index].name;
    role.textContent = testimonials[index].role;
    image.src = testimonials[index].image;
}

function prevTestimonial() {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    updateTestimonial(currentIndex);
}

function nextTestimonial() {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    updateTestimonial(currentIndex);
}

document.querySelectorAll('button')[0].addEventListener('click', prevTestimonial);
document.querySelectorAll('button')[1].addEventListener('click', nextTestimonial);

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        prevTestimonial();
    } else if (event.key === 'ArrowRight') {
        nextTestimonial();
    }
});

updateTestimonial(currentIndex);