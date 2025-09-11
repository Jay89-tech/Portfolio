        // Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 4000);

        // Enter site function
        function enterSite() {
            document.getElementById('landingPage').style.display = 'none';
            document.getElementById('mainSite').style.display = 'block';
        }

        // Navigation functionality
        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            // Remove active class from all nav buttons
            const navBtns = document.querySelectorAll('.nav-btn');
            navBtns.forEach(btn => btn.classList.remove('active'));
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Add active class to clicked button
            event.target.classList.add('active');
        }

        // Photo gallery functionality with preloaded images
        const photoCollections = {
            '2003-2005': [
                '2003-2005/IMG-20250804-WA0066.jpg',
                '2003-2005/IMG-20250804-WA0071.jpg',
                '2003-2005/IMG-20250804-WA0075.jpg',
                '2003-2005/IMG-20250804-WA0085.jpg',
                '2003-2005/IMG-20250804-WA0089.jpg',
                '2003-2005/IMG-20250804-WA0093.jpg',
                '2003-2005/IMG-20250804-WA0100.jpg',
                '2003-2005/IMG-20250804-WA0114.jpg',
                '2003-2005/IMG-20250804-WA0115.jpg',
                '2003-2005/IMG-20250804-WA0111.jpg'
            ],
            '2006-2008': [
                '2006-2008/IMG-20250804-WA0062.jpg',
                '2006-2008/IMG-20250804-WA0067.jpg',
                '2006-2008/IMG-20250804-WA0073.jpg',
                '2006-2008/IMG-20250804-WA0077.jpg',
                '2006-2008/IMG-20250804-WA0083.jpg',
                '2006-2008/IMG-20250804-WA0104.jpg',
                '2006-2008/IMG-20250804-WA0109.jpg',
                '2006-2008/IMG-20250804-WA0110.jpg',
                '2006-2008/IMG-20250804-WA0121.jpg',
                '2006-2008/IMG-20250804-WA0125.jpg',

            ],
            '2009-2011': [
                '2009-2011/IMG-20250126-WA0042.jpg',
                '2009-2011/IMG-20250126-WA0049.jpg',
                '2009-2011/IMG-20250126-WA0056.jpg',
                '2009-2011/IMG-20250126-WA0058.jpg',
                '2009-2011/IMG-20250204-WA0063.jpg',
                '2009-2011/IMG-20250204-WA0065.jpg',
                '2009-2011/IMG-20250804-WA0064.jpg',
                '2009-2011/IMG-20250804-WA0087.jpg',
                '2009-2011/IMG-20250804-WA0108.jpg',
                '2009-2011/IMG-20250804-WA0123.jpg'
            ],
            'Family': [
                'family/20231105_091210.jpg',
                'family/20231225_155553.jpg',
                'family/20231225_160054.jpg',
                'family/20231225_160127.jpg',
                'family/20231225_161845.jpg',
                'family/IMG_20220627_150145.jpg',
                'family/IMG_20220627_152909.jpg',
                'family/IMG_20221113_155559_288_041353.jpg',
                'family/IMG-20230410-WA0035.jpg'
            ],
            'Friends': [
                'friends/9089.jpg',
                'friends/20240228_181803.jpg',
                'friends/20240229_151510.jpg',
                'friends/20240316_172606.jpg',
                'friends/IMG_20221023_101447.jpg',
                'friends/IMG-20220523-WA0026.jpg',
                'friends/IMG-20220523-WA0031.jpg',
                'friends/IMG-20220523-WA0121.jpg',
                'friends/IMG-20220820-WA0080.jpg',
                'friends/IMG-20221006-WA0041.jpg'
            ],
            '2020-2021': [
                '2020-2021/IMG-20240221-WA0029.jpg',
                '2020-2021/IMG-20240602-WA0063.jpg',
                '2020-2021/IMG-20241025-WA0072.jpg',
                '2020-2021/IMG-20241027-WA0061.jpg',
                '2020-2021/IMG-20250126-WA0052.jpg',
                '2020-2021/IMG-20250126-WA0055.jpg',
                '2020-2021/IMG-20250204-WA0050.jpg',
                '2020-2021/IMG-20250204-WA0054.jpg',
                '2020-2021/IMG-20250204-WA0056.jpg',
                '2020-2021/IMG-20250204-WA0062.jpg'
            ],
            'High-School': [
                'high-school/IMG-20220814-WA0039.jpg',
                'high-school/IMG-20220820-WA0066.jpg',
                'high-school/IMG-20240221-WA0013.jpg',
                'high-school/IMG-20240221-WA0017.jpg',
                'high-school/IMG-20240221-WA0020.jpg',
                'high-school/IMG-20250126-WA0048.jpg',
                'high-school/IMG-20250126-WA0050.jpg',
                'high-school/IMG-20250126-WA0057.jpg',
                'high-school/IMG-20250204-WA0059.jpg',
                'high-school/IMG-20250204-WA0066.jpg',
            ],
            '2022-2023': [
                '2022-Bloem/IMG_20220427_150012.jpg',
                '2022-Bloem/IMG_20220719_150857.jpg',
                '2022-Bloem/IMG_20221014_121024.jpg',
                '2022-Bloem/IMG_20221126_170602.jpg',
                '2022-Bloem/IMG-20220523-WA0024.jpg',
                '2022-Bloem/IMG-20220523-WA0072.jpg',
                '2022-Bloem/IMG-20220523-WA0107.jpg',
                '2022-Bloem/IMG-20220906-WA0013.jpg',
                '2022-Bloem/IMG-20220906-WA0048.jpg',
                '2022-Bloem/IMG-20240804-WA0045.jpg'
            ],
                '2023': [
                '2023/20230424_134744.jpg',
                '2023/20230503_165351.jpg',
                '2023/20230517_143103.jpg',
                '2023/20230527_133547.jpg',
                '2023/20230902_213547.jpg',
                '2023/20230914_133400.jpg',
                '2023/20230919_162212.jpg',
                '2023/20230921_172843.jpg',
                '2023/20231222_150201.jpg',
                '2023/IMG-20230409-WA0024.jpg',
            ],
            '2024': [
                '2024/20240209_084139.jpg',
                '2024/IMG-20240210-WA0007.jpg',
                '2024/IMG-20240302-WA0037.jpg',
                '2024/IMG-20240325-WA0027.jpg',
                '2024/IMG-20240326-WA0029.jpg',
                '2024/IMG-20240512-WA0065.jpg',
                '2024/IMG-20240626-WA0041.jpg',
                '2024/IMG-20240512-WA0028.jpg',
                '2024/IMG-20240928-WA0101.jpg',
                '2024/IMG-20240928-WA0138.jpg'
            ],
            'jan-2025': [
                'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1452723312111-3a7d0db0e024?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            ],
            'feb-2025': [
                'https://images.unsplash.com/photo-1518621012118-1d82eb4fbb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1518621012118-1d82eb4fbb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1464822759844-d150ad6c1c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1518621012118-1d82eb4fbb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1518621012118-1d82eb4fbb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1518621012118-1d82eb4fbb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1464822759844-d150ad6c1c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            ],
            'mar-2025': [
                'https://images.unsplash.com/photo-1464822759844-d150ad6c1c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1464822759844-d150ad6c1c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1464822759844-d150ad6c1c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1464822759844-d150ad6c1c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1464822759844-d150ad6c1c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            ],
            'apr-2025': [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            ],
            'may-2025': [
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            ],
            'jun-2025': [
                'https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            ],
            'jul-2025': [
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            ],
            'aug-2025': [
                'https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            ],
            'recent-2025': [
                'https://images.unsplash.com/photo-1518621012118-1d82eb4fbb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1464822759844-d150ad6c1c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1518621012118-1d82eb4fbb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1464822759844-d150ad6c1c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
            ]
        };
        // Current modal state
        let currentModalImage = '';
        let currentCollection = [];
        let currentImageIndex = 0;

        function openGallery(folderName) {
            const gallery = document.getElementById('photoGallery');
            const galleryTitle = document.getElementById('galleryTitle');
            const photoGrid = document.getElementById('photoGrid');
            
            galleryTitle.textContent = folderName.replace(/-/g, ' ').toUpperCase();
            
            // Clear existing photos
            photoGrid.innerHTML = '';
            
            // Get photos for this folder
            const photos = photoCollections[folderName] || [];
            
            // Create photo elements with preloaded images
            for (let i = 0; i < 10; i++) {
                const photoDiv = document.createElement('div');
                photoDiv.className = 'photo-placeholder';
                
                if (photos[i]) {
                    photoDiv.style.backgroundImage = `url(${photos[i]})`;
                    photoDiv.innerHTML = '';
                    
                    // Add click listener to open modal
                    photoDiv.addEventListener('click', () => {
                        openImageModal(photos[i], photos, i, folderName);
                    });
                } else {
                    photoDiv.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
                    photoDiv.innerHTML = `<div class="photo-text">Photo ${i + 1}<br>Add your image here</div>`;
                    
                    photoDiv.addEventListener('click', () => {
                        alert(`Add your photo ${i + 1} for ${folderName.replace(/-/g, ' ')} here.`);
                    });
                }
                
                photoGrid.appendChild(photoDiv);
            }
            
            gallery.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeGallery() {
            document.getElementById('photoGallery').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Modal Image Viewer Functions
        function openImageModal(imageSrc, collection, index, folderName) {
            currentModalImage = imageSrc;
            currentCollection = collection;
            currentImageIndex = index;
            
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            const modalTitle = document.getElementById('modalTitle');
            const imageCounter = document.getElementById('imageCounter');
            
            modalImg.src = imageSrc;
            modalTitle.textContent = `${folderName.replace(/-/g, ' ').toUpperCase()} - Photo ${index + 1}`;
            imageCounter.textContent = `${index + 1} / ${collection.length}`;
            
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Prevent right-click context menu on the image
            modalImg.oncontextmenu = function(e) {
                e.preventDefault();
                return false;
            };
            
            // Prevent drag and drop
            modalImg.ondragstart = function(e) {
                e.preventDefault();
                return false;
            };
        }

        function closeImageModal() {
            document.getElementById('imageModal').style.display = 'none';
            document.body.style.overflow = 'hidden'; // Keep gallery scroll disabled
        }

        function previousImage() {
            if (currentCollection.length === 0) return;
            
            currentImageIndex = (currentImageIndex - 1 + currentCollection.length) % currentCollection.length;
            const modalImg = document.getElementById('modalImage');
            const imageCounter = document.getElementById('imageCounter');
            
            modalImg.src = currentCollection[currentImageIndex];
            imageCounter.textContent = `${currentImageIndex + 1} / ${currentCollection.length}`;
        }

        function nextImage() {
            if (currentCollection.length === 0) return;
            
            currentImageIndex = (currentImageIndex + 1) % currentCollection.length;
            const modalImg = document.getElementById('modalImage');
            const imageCounter = document.getElementById('imageCounter');
            
            modalImg.src = currentCollection[currentImageIndex];
            imageCounter.textContent = `${currentImageIndex + 1} / ${currentCollection.length}`;
        }

        // Response form functionality
        function submitResponse() {
            const response = document.getElementById('birthdayResponse').value;
            const messageDiv = document.getElementById('responseMessage');
            
            if (response.trim() === '') {
                messageDiv.textContent = 'Please tell me your birthday wishes! 💕';
                messageDiv.style.color = '#ff6b6b';
                return;
            }
            
            // Here you could send the response to a server or email
            // For now, we'll just show a confirmation message
            messageDiv.innerHTML = `
                <div style="background: rgba(255, 255, 255, 0.1); padding: 1rem; border-radius: 10px; margin-top: 1rem;">
                    <h3>Your message has been received! 💖</h3>
                    <p>I can't wait to make your birthday dreams come true!</p>
                    <p><em>"${response}"</em></p>
                </div>
            `;
            messageDiv.style.color = '#4ecdc4';
            
            // Clear the textarea
            document.getElementById('birthdayResponse').value = '';
        }

        // Enhanced keyboard navigation
        document.addEventListener('keydown', function(event) {
            const imageModal = document.getElementById('imageModal');
            const photoGallery = document.getElementById('photoGallery');
            
            if (imageModal.style.display === 'flex') {
                // Image modal is open
                switch(event.key) {
                    case 'Escape':
                        closeImageModal();
                        break;
                    case 'ArrowLeft':
                        event.preventDefault();
                        previousImage();
                        break;
                    case 'ArrowRight':
                        event.preventDefault();
                        nextImage();
                        break;
                }
            } else if (photoGallery.style.display === 'block') {
                // Photo gallery is open
                if (event.key === 'Escape') {
                    closeGallery();
                }
            }
        });

        // Prevent image saving and copying
        document.addEventListener('DOMContentLoaded', function() {
            // Disable drag and drop on all images
            document.addEventListener('dragstart', function(e) {
                if (e.target.tagName === 'IMG') {
                    e.preventDefault();
                    return false;
                }
            });
            
            // Disable right-click context menu on images
            document.addEventListener('contextmenu', function(e) {
                if (e.target.tagName === 'IMG' || e.target.classList.contains('photo-placeholder')) {
                    e.preventDefault();
                    return false;
                }
            });
            
            // Disable common keyboard shortcuts for saving images
            document.addEventListener('keydown', function(e) {
                // Disable Ctrl+S (Save)
                if (e.ctrlKey && e.key === 's') {
                    e.preventDefault();
                    return false;
                }
                // Disable Ctrl+Shift+S (Save As)
                if (e.ctrlKey && e.shiftKey && e.key === 'S') {
                    e.preventDefault();
                    return false;
                }
                // Disable F12 (Developer Tools)
                if (e.key === 'F12') {
                    e.preventDefault();
                    return false;
                }
                // Disable Ctrl+Shift+I (Developer Tools)
                if (e.ctrlKey && e.shiftKey && e.key === 'I') {
                    e.preventDefault();
                    return false;
                }
                // Disable Ctrl+U (View Source)
                if (e.ctrlKey && e.key === 'u') {
                    e.preventDefault();
                    return false;
                }
            });
        });