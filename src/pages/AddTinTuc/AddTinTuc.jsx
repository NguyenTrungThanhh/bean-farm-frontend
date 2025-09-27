import axios from '@/api/axiosConfig';
import { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { toast } from 'react-toastify';
import { assets } from '@/assets/assets';

function AddTinTuc() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.title = 'Thêm tin tức - KKC Logistics';
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('category', category);
            formData.append('content', content);
            formData.append('date', date);
            formData.append('image', image);

            const response = await axios.post('/api/v1/admin/TinTuc/add', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.data.success) {
                toast.success('Thêm tin tức thành công');
                setName('');
                setCategory('');
                setContent('');
                setDate('');
                setImage(false);
            } else {
                toast.error('Something went wrong');
            }
        } catch (error) {
            toast.error('Error occurred');
        }

        setLoading(false);
    };

    function CustomUploadAdapterPlugin(editor) {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return {
                upload: () =>
                    loader.file.then(async (file) => {
                        const formData = new FormData();
                        formData.append('image', file); // phải là 'image' vì backend dùng upload.single('image')

                        try {
                            const res = await axios.post('/api/v1/admin/upload-image', formData, {
                                headers: {
                                    'Content-Type': 'multipart/form-data',
                                },
                            });

                            return {
                                default: res.data.url, // Cloudinary trả về đường dẫn ảnh
                            };
                        } catch (error) {
                            console.error('Lỗi upload ảnh:', error);
                            return Promise.reject(error);
                        }
                    }),
            };
        };
    }

    return loading ? (
        <div className="grid place-items-center min-h-[80vh]">
            <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
        </div>
    ) : (
        <>
            {localStorage.getItem('isAdmin') ? (
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-start gap-8 text-gray-600 pt-8 pl-5 sm:pt-12 sm:pl-12"
                >
                    {/* Upload hình ảnh */}
                    <div className="flex flex-col gap-4">
                        <p>Tải hình ảnh lên</p>
                        <input
                            onChange={(e) => setImage(e.target.files[0])}
                            type="file"
                            id="image"
                            accept="image/*"
                            hidden
                        />
                        <label htmlFor="image">
                            <img
                                className="w-24 cursor-pointer"
                                src={image ? URL.createObjectURL(image) : assets.upload_area}
                                alt=""
                            />
                        </label>
                    </div>

                    {/* Tiêu đề */}
                    <div className="flex flex-col gap-2.5 w-2/4">
                        <p>Tiêu đề</p>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]"
                            placeholder="Nhập vào chỗ trống"
                            type="text"
                        />
                    </div>

                    {/* Danh mục */}
                    <div className="flex flex-col gap-2.5 w-2/4">
                        <p>Danh mục</p>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]"
                            placeholder="Nhập vào chỗ trống"
                            type="text"
                        />
                    </div>

                    {/* Mô tả - dùng CKEditor */}
                    <div className="flex flex-col gap-2.5 w-2/4">
                        <p>Mô tả</p>
                        <CKEditor
                            editor={ClassicEditor}
                            data={content}
                            config={{
                                extraPlugins: [CustomUploadAdapterPlugin],
                                toolbar: [
                                    'heading',
                                    '|',
                                    'bold',
                                    'italic',
                                    'underline',
                                    'link',
                                    '|',
                                    'bulletedList',
                                    'numberedList',
                                    'blockQuote',
                                    'insertTable',
                                    '|',
                                    'imageUpload',
                                    '|',
                                    'undo',
                                    'redo',
                                ],
                                heading: {
                                    options: [
                                        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                                        {
                                            model: 'heading1',
                                            view: 'h1',
                                            title: 'Heading 1',
                                            class: 'ck-heading_heading1',
                                        },
                                        {
                                            model: 'heading2',
                                            view: 'h2',
                                            title: 'Heading 2',
                                            class: 'ck-heading_heading2',
                                        },
                                        {
                                            model: 'heading3',
                                            view: 'h3',
                                            title: 'Heading 3',
                                            class: 'ck-heading_heading3',
                                        },
                                    ],
                                },
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setContent(data);
                            }}
                        />
                    </div>

                    {/* Thời gian */}
                    <div className="flex flex-col gap-2.5 w-2/4">
                        <p>Thời gian</p>
                        <input
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]"
                            placeholder="Nhập vào chỗ trống"
                            type="text"
                        />
                    </div>

                    {/* Nút submit */}
                    <button type="submit" className="text-base bg-black text-white py-2.5 px-14 cursor-pointer">
                        ADD
                    </button>
                </form>
            ) : null}
        </>
    );
}

export default AddTinTuc;
