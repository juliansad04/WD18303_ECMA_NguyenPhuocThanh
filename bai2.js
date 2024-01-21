// Giải thích điểm khác nhau giữa đoạn code 1 và 2
const axios = require('axios');
//1
async function fetchUrls(urls){
    const results = [];
    for(const url of urls){
        const res = await axios.get(url);
        results.push(res);
    }
    return results;
}

//2
async function fetchUrlsParallel(urls){
    const results = await Promise.all(
        urls.map(function(url){
            return axios.get(url);
        })
    );
    return results;
}

// Đoạn code 1 (fetchUrls):
// Gửi yêu cầu HTTP đến từng địa chỉ (URL) trong danh sách một cách tuần tự, nghĩa là chờ yêu cầu hiện tại hoàn thành mới bắt đầu yêu cầu tiếp theo.
// Đoạn code 2 (fetchUrlsParallel):
// Gửi yêu cầu HTTP đến tất cả địa chỉ (URL) cùng một lúc, không cần phải chờ yêu cầu hiện tại hoàn thành. Điều này giúp làm nhanh hóa quá trình nếu có nhiều yêu cầu vì chúng được xử lý song song.