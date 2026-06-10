import React, { useState } from 'react';
import { Camera, Heart, MessageCircle, Check, Sparkles, Send, Eye } from 'lucide-react';

interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  commentsCount: number;
  location: string;
  caption: string;
  category: string;
  commentsList: { username: string; text: string; time: string }[];
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig1',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAxe7HcO-Cal1WdbbFCgE9ZVd_P164e-LWO8UO7d_ak40AdWkq5G2RKfoQ3TNNGn9I0JpCcQS4haBzb6CTPjKxoV5A9b8SyhAc4gZG9Kzs9ZWjLLEf9f5CBB-KHLr39WGR5zhcZh-OqQOd2aVIWEXoF4qcx0WCIx25F6InDtu0xhZOwolaDBZxfVZeilc2ig6GRdBEyP0i4dHPivApRngmf9yZ6Sv-GlimW-EU-icHFe4QBxJNLzeY1si8D9Xj6XuKl2LCxWhFpbQ_',
    likes: 2408,
    commentsCount: 114,
    location: 'Maryam Azhar Studio DHA Lahore',
    category: 'Bridal',
    caption: 'Pure traditional elegance. Crafted with the signature glow and flawless HD airbrush base. Beautiful eyes accentuated with soft golds and high luxury metallic shades. ✨ Bookings for the upcoming bridal season are currently active.',
    commentsList: [
      { username: 'ayesha.kh', text: 'Literally the most flawless base ever! 😍', time: '1h' },
      { username: 'zainab_lahore', text: 'My bridal makeup was done by Maryam and everyone loved it!', time: '3h' },
      { username: 'tomford_official_fan', text: 'This editorial look is breathtaking.', time: '12h' }
    ]
  },
  {
    id: 'ig2',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADGsaH9XGSiJAFU3GO7PBwh3STgBfrJ2Oxlrt7jktZq6ubOkigxYApXoeLySf4wMdGGIEPJTAHMVw9hvU_S7IirMH5R2bOhoxpOcpPwlFv8tH0491A_MvZs0iHWtq-B-4GO7F9qYJ1Rg__d5YvIpvse--x50wTh7RWRwea4vQqS0G88BTLmEmuSAtpe-Rxq0kwO4zpkQEFXN-hmMAhmZXXMB49Y9Gt3qXEOnJFeBLMDqlb-GeCEGTmwCrkG6Cmcx6JKbXkR1nBYlba',
    likes: 1845,
    commentsCount: 62,
    location: 'DHA Phase 4 Lahore',
    category: 'Studio',
    caption: 'Step behind the curtains of true transformation. Every product we apply is 100% authentic, handpicked from the global boutiques of Tom Ford, Charlotte Tilbury, and Chanel. Your skin deserves nothing but the ultimate safety and excellence.',
    commentsList: [
      { username: 'fatima_naeem', text: 'Love that you guys show your raw process! So professional.', time: '2h' },
      { username: 'hareem_dha', text: 'Best salon hygiene in Phase 4 CCA. ❤️', time: '5h' }
    ]
  },
  {
    id: 'ig3',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkknO5Y8dRPF3FnG6KRAqO6FNbXY0LnxLYpcug8esaLPzLuEyRi6iiXZZDNJjGrZY5p3OxOSeU-KSKV0U_o9rp65xwKbmdRvydd6IbYBbz37iiorNZOFMFPXRabWM_wjLegxRIka2f0YHXf3Vm3uL46JN4EVp9gznJsCIf36-vjGTI5tjcltLDRqxwiqRR_hrv1TpTOOe38SMv2EXfxY-0zJjLokv6ghWerHBNR0-9wnkk78y5TVr2grmYoZdrSNFTstDhFEBufGtW',
    likes: 3105,
    commentsCount: 145,
    location: 'Maryam Azhar Studio DHA Lahore',
    category: 'Bridal',
    caption: 'Royalty reimagined. Deep traditional hues paired with a sparkling dewy palette to highlight the gorgeous intricate South Asian jewelry. Elegant hair waves perfectly pinned with absolute secure hold. 👑',
    commentsList: [
      { username: 'sara_khan99', text: 'Oh my god this is gorgeous! Saving this for my wedding.', time: '30m' },
      { username: 'lubna.styles', text: 'Unmatched perfection in Lahore', time: '1d' }
    ]
  },
  {
    id: 'ig4',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7RxeeS_tx_-pxM-fVsXGxeL-oZmN4zpFElU3-kZayhUHE5fgkii2z7hKuxCPuigRIgtoHAygdEfHWoz9q50iH7IZO0jdTI4AcNjJkZOWa5JNQGERuWq2HfhbZC1M7R30z4H7BCvx7vk_jxIirnAWblzrsgPZjPguwpDSkv_fleTP8h-CjQZJsJC54f02bcoSJDw5FHACbvnJiSwgUYVJlmNnbX5fROpKnunNDZ8w5trsPuCN5WcVNmCGbA3eiEAdW9Qy4pv9aPoLU',
    likes: 1290,
    commentsCount: 48,
    location: 'Sector CCA, Phase 4',
    category: 'Nails',
    caption: 'Custom 24K gold foil abstract art overlaid upon a sleek neutral matte build. Crafted by our top nail suite technicians for flawless premium durability. 💅✨',
    commentsList: [
      { username: 'nail_inspo_pk', text: 'Cleanest gold leaf work I have seen!', time: '4h' },
      { username: 'maliha_sh', text: 'Going to book this set for the weekend.', time: '1d' }
    ]
  },
  {
    id: 'ig5',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz7OtTU3we_Eg7B48pBCQiW0V8xTZCmAonARPQ5p5644ghP0PciBSRR4Rix7ffmhwwhBdvxvHtYB9GwjgTaephsnmr2vN9G1htWwc6Z9uYoVefyktDZFkTVShogTVGtX4TJUK7kfXcqQ4bGqKSoYEhrJfDIfaSS79nK3UfRC68pZL-sztlQAzzbWvsDz_3FjEbwGygg6HaAx-QO9gLBLSwrw5fFZKsHA-xOobJmTQA-ytbnaNZvpk2D0k1783gFlV0mJUWOCBn1oGZ',
    likes: 2120,
    commentsCount: 93,
    location: 'Maryam Azhar Studio DHA Lahore',
    category: 'Color',
    caption: 'Dimensional buttery beige balayage on thick, healthy waves. Utilizing gold-standard French Plex protection to guarantee zero fiber damage while building high-shine tones. 💇‍♀️',
    commentsList: [
      { username: 'nadia_jamil', text: 'This color blend is so masterfully smooth, love it!', time: '1h' },
      { username: 'amber.hairstylist', text: 'Excellent depth retention. Flawless', time: '6h' }
    ]
  },
  {
    id: 'ig6',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQLzRhZGY_Pl2KVePlu_ZmYvpcC2krxjSKvGEn0AiUAOb1DXZZh5Ju_mcaCTiX02XQRJ38jDBLqpHaD25wb8OdEh-tT_Znb5sJdT5vWRSjqAWqggYJkODgu0MTHR4zQ-pFkJb4cCMSQoLDJZweU9xMdod29bWdt55_mFGWmO5wyhAMDgXrVuMhVPorfJxCv4byWD5cFUucAB8n6pZkYBrzobtd3HySeGaTqljWR-PF8e6cj0Z7_1InRKETs2Vsh_VXKu8sLB53DuaY',
    likes: 1475,
    commentsCount: 39,
    location: 'Lahore, Pakistan',
    category: 'Studio',
    caption: 'A view into our high vanity suite. Bathed in soft neutral ring diffusers, every client enjoys custom ergonomic seats, hot botanical blends, and absolute high-security hospitality.',
    commentsList: [
      { username: 'sehrish_ali', text: 'My absolute favorite peaceful spot in Lahore.', time: '2d' },
      { username: 'maheen_k', text: 'Felt like a queen during my styling last week.', time: '3d' }
    ]
  }
];

const HIGHLIGHTS = [
  { id: 'h1', title: 'Signature base', cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAxe7HcO-Cal1WdbbFCgE9ZVd_P164e-LWO8UO7d_ak40AdWkq5G2RKfoQ3TNNGn9I0JpCcQS4haBzb6CTPjKxoV5A9b8SyhAc4gZG9Kzs9ZWjLLEf9f5CBB-KHLr39WGR5zhcZh-OqQOd2aVIWEXoF4qcx0WCIx25F6InDtu0xhZOwolaDBZxfVZeilc2ig6GRdBEyP0i4dHPivApRngmf9yZ6Sv-GlimW-EU-icHFe4QBxJNLzeY1si8D9Xj6XuKl2LCxWhFpbQ_' },
  { id: 'h2', title: 'Luxury Base', cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADGsaH9XGSiJAFU3GO7PBwh3STgBfrJ2Oxlrt7jktZq6ubOkigxYApXoeLySf4wMdGGIEPJTAHMVw9hvU_S7IirMH5R2bOhoxpOcpPwlFv8tH0491A_MvZs0iHWtq-B-4GO7F9qYJ1Rg__d5YvIpvse--x50wTh7RWRwea4vQqS0G88BTLmEmuSAtpe-Rxq0kwO4zpkQEFXN-hmMAhmZXXMB49Y9Gt3qXEOnJFeBLMDqlb-GeCEGTmwCrkG6Cmcx6JKbXkR1nBYlba' },
  { id: 'h3', title: 'Gold Foil Art', cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7RxeeS_tx_-pxM-fVsXGxeL-oZmN4zpFElU3-kZayhUHE5fgkii2z7hKuxCPuigRIgtoHAygdEfHWoz9q50iH7IZO0jdTI4AcNjJkZOWa5JNQGERuWq2HfhbZC1M7R30z4H7BCvx7vk_jxIirnAWblzrsgPZjPguwpDSkv_fleTP8h-CjQZJsJC54f02bcoSJDw5FHACbvnJiSwgUYVJlmNnbX5fROpKnunNDZ8w5trsPuCN5WcVNmCGbA3eiEAdW9Qy4pv9aPoLU' },
  { id: 'h4', title: 'Deep Balayage', cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz7OtTU3we_Eg7B48pBCQiW0V8xTZCmAonARPQ5p5644ghP0PciBSRR4Rix7ffmhwwhBdvxvHtYB9GwjgTaephsnmr2vN9G1htWwc6Z9uYoVefyktDZFkTVShogTVGtX4TJUK7kfXcqQ4bGqKSoYEhrJfDIfaSS79nK3UfRC68pZL-sztlQAzzbWvsDz_3FjEbwGygg6HaAx-QO9gLBLSwrw5fFZKsHA-xOobJmTQA-ytbnaNZvpk2D0k1783gFlV0mJUWOCBn1oGZ' },
  { id: 'h5', title: 'Our Studio', cover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQLzRhZGY_Pl2KVePlu_ZmYvpcC2krxjSKvGEn0AiUAOb1DXZZh5Ju_mcaCTiX02XQRJ38jDBLqpHaD25wb8OdEh-tT_Znb5sJdT5vWRSjqAWqggYJkODgu0MTHR4zQ-pFkJb4cCMSQoLDJZweU9xMdod29bWdt55_mFGWmO5wyhAMDgXrVuMhVPorfJxCv4byWD5cFUucAB8n6pZkYBrzobtd3HySeGaTqljWR-PF8e6cj0Z7_1InRKETs2Vsh_VXKu8sLB53DuaY' }
];

export default function InstagramFeed() {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [newComment, setNewComment] = useState('');
  const [activeStory, setActiveStory] = useState<string | null>(null);

  const toggleLike = (postId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handlePostClick = (post: InstagramPost) => {
    setSelectedPost(post);
    setNewComment('');
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !selectedPost) return;

    const updatedPosts = INSTAGRAM_POSTS.map(post => {
      if (post.id === selectedPost.id) {
        return {
          ...post,
          commentsCount: post.commentsCount + 1,
          commentsList: [
            ...post.commentsList,
            { username: 'you_guest_user', text: newComment, time: '1s' }
          ]
        };
      }
      return post;
    });

    // Update locally in view
    const modifiedPost = updatedPosts.find(p => p.id === selectedPost.id);
    if (modifiedPost) {
      setSelectedPost(modifiedPost);
    }
    setNewComment('');
  };

  const showStory = (storyId: string) => {
    setActiveStory(storyId);
    setTimeout(() => {
      setActiveStory(null);
    }, 4000);
  };

  return (
    <section id="instagram-feed" className="py-24 bg-surface px-6 border-t border-outline-variant/20">
      <div className="max-w-4xl mx-auto">
        
        {/* Instagram Profile Header Design */}
        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-md p-6 md:p-8 space-y-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
            
            {/* Avatar block */}
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 rounded-full -m-1 animate-pulse"></div>
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-surface overflow-hidden bg-black">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAxe7HcO-Cal1WdbbFCgE9ZVd_P164e-LWO8UO7d_ak40AdWkq5G2RKfoQ3TNNGn9I0JpCcQS4haBzb6CTPjKxoV5A9b8SyhAc4gZG9Kzs9ZWjLLEf9f5CBB-KHLr39WGR5zhcZh-OqQOd2aVIWEXoF4qcx0WCIx25F6InDtu0xhZOwolaDBZxfVZeilc2ig6GRdBEyP0i4dHPivApRngmf9yZ6Sv-GlimW-EU-icHFe4QBxJNLzeY1si8D9Xj6XuKl2LCxWhFpbQ_" 
                  alt="Maryam Azhar Artist Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute bottom-1 right-1 bg-primary text-on-primary p-1.5 rounded-full shadow-lg">
                <Camera className="w-4 h-4" />
              </span>
            </div>

            {/* User Bio and Stats */}
            <div className="flex-grow space-y-4 text-center md:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-center md:justify-start">
                <h3 className="font-display text-xl font-bold text-on-surface tracking-wide flex items-center justify-center md:justify-start gap-1.5">
                  maryamazharstudio
                  <span className="bg-[#0095f6] text-white p-0.5 rounded-full inline-flex items-center justify-center translate-y-[1px]" title="Verified Studio Account">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-primary text-on-primary px-5 py-1.5 rounded-md font-sans text-[10px] tracking-wider font-bold hover:opacity-95 transition-opacity"
                  >
                    Follow
                  </a>
                  <button className="border border-outline-variant/30 hover:bg-surface px-4 py-1.5 rounded-md font-sans text-[10px] tracking-wider font-bold text-on-surface uppercase">
                    Message
                  </button>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="flex items-center justify-center md:justify-start space-x-8 py-1 border-y border-outline-variant/10 text-xs">
                <div>
                  <span className="font-bold text-on-surface">1,240</span> <span className="text-on-surface-variant font-sans">posts</span>
                </div>
                <div>
                  <span className="font-bold text-on-surface">184K</span> <span className="text-on-surface-variant font-sans">followers</span>
                </div>
                <div>
                  <span className="font-bold text-on-surface">342</span> <span className="text-on-surface-variant font-sans">following</span>
                </div>
              </div>

              {/* Bio description */}
              <div className="space-y-1 font-sans text-xs text-on-surface-variant leading-relaxed">
                <p className="font-bold text-on-surface font-display">Maryam Azhar Studio • Lahore</p>
                <p className="text-[11px] italic">👑 Professional Makeup & Hair Educator | Bridal Ambassador</p>
                <p className="text-[11px]">🎨 Signature base creations, French highlights & Luxury nail armor</p>
                <p className="text-[11px]">💄 Brands used: Charlotte Tilbury, Tom Ford, Chanel & Dior</p>
                <a 
                  href="https://maps.google.com/?q=Plaza+169+DD,+Sector+CCA,+DHA+Phase+4,+Lahore" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-primary font-bold hover:underline font-sans text-[11px] block mt-1"
                >
                  📍 DHA Phase 4 CCA, Lahore - Directions
                </a>
              </div>
            </div>
          </div>

          {/* Stories Highlights representation */}
          <div className="flex items-center justify-start gap-4 md:gap-6 overflow-x-auto pb-2 scrollbar-none pt-4 border-t border-outline-variant/20">
            {HIGHLIGHTS.map(h => (
              <button 
                key={h.id} 
                onClick={() => showStory(h.id)}
                className="flex flex-col items-center gap-1.5 focus:outline-none group shrink-0"
              >
                <div className="relative w-14 h-14 rounded-full p-[2px] bg-outline-variant group-hover:bg-primary transition-colors">
                  <div className="w-full h-full rounded-full border-2 border-surface overflow-hidden bg-black">
                    <img src={h.cover} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                </div>
                <span className="font-sans text-[9px] font-bold text-on-surface-variant uppercase tracking-widest leading-none">
                  {h.title}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* Live Active Story Modal View */}
        {activeStory && (
          <div className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4" onClick={() => setActiveStory(null)}>
            <div className="relative w-full max-w-sm aspect-[9/16] bg-surface rounded-md overflow-hidden" onClick={e => e.stopPropagation()}>
              
              {/* ProgressBar */}
              <div className="absolute top-2 left-2 right-2 flex gap-1 z-20">
                <div className="h-1 flex-grow bg-primary overflow-hidden rounded-full">
                  <div className="h-full bg-on-primary animate-[progress_4s_linear_forwards]" style={{ animationDuration: '4000ms' }}></div>
                </div>
              </div>

              {/* Story Header */}
              <div className="absolute top-4 left-3 right-3 flex justify-between items-center z-20 text-white">
                <div className="flex items-center space-x-2">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAxe7HcO-Cal1WdbbFCgE9ZVd_P164e-LWO8UO7d_ak40AdWkq5G2RKfoQ3TNNGn9I0JpCcQS4haBzb6CTPjKxoV5A9b8SyhAc4gZG9Kzs9ZWjLLEf9f5CBB-KHLr39WGR5zhcZh-OqQOd2aVIWEXoF4qcx0WCIx25F6InDtu0xhZOwolaDBZxfVZeilc2ig6GRdBEyP0i4dHPivApRngmf9yZ6Sv-GlimW-EU-icHFe4QBxJNLzeY1si8D9Xj6XuKl2LCxWhFpbQ_" alt="" className="w-8 h-8 rounded-full border border-white" />
                  <span className="font-sans text-[11px] font-bold">maryamazharstudio</span>
                </div>
                <button onClick={() => setActiveStory(null)} className="text-white hover:text-primary p-1 text-xs">
                  ✕
                </button>
              </div>

              {/* Cover Image inside Story */}
              <img 
                src={HIGHLIGHTS.find(h => h.id === activeStory)?.cover} 
                alt="Highlight Look" 
                className="w-full h-full object-cover" 
              />

              <div className="absolute bottom-4 left-4 right-4 z-20 text-white text-center text-xs bg-black/40 backdrop-blur-sm p-3 rounded-sm border border-white/10 font-sans">
                <Sparkles className="w-4 h-4 mx-auto mb-1 text-primary-container" />
                <p className="font-semibold uppercase tracking-wider text-[10px]">Real Client Transformation</p>
                <p className="text-[11px] opacity-90 mt-0.5">DHA Phase 4 Lahore Suite</p>
              </div>
            </div>
          </div>
        )}

        {/* Instantly loaded grids and captions */}
        <div className="text-center pt-16 pb-8 space-y-2">
          <span className="font-sans text-[10px] tracking-[0.2em] text-primary uppercase font-bold">RECENT INSTAGRAM SESSIONS</span>
          <h4 className="font-display text-xl font-bold uppercase text-on-surface">Explore Digital Feed</h4>
          <p className="font-sans text-[11px] text-on-surface-variant max-w-sm mx-auto">
            Click on any publication to read makeup ingredients, styling summaries and review native client discussions.
          </p>
        </div>

        {/* 3x2 Grid Feed */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {INSTAGRAM_POSTS.map(post => {
            const hasLiked = likedPosts[post.id];
            return (
              <div 
                key={post.id}
                onClick={() => handlePostClick(post)}
                className="group relative aspect-square bg-surface-container-high rounded-sm overflow-hidden cursor-pointer border border-outline-variant/10 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <img 
                  src={post.image} 
                  alt={post.caption} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Floating Meta tags and Category label */}
                <span className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-[8px] font-bold uppercase tracking-widest text-white px-2 py-0.5 rounded-sm">
                  {post.category}
                </span>

                {/* Classic Hover Overlay with Likes */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-6 z-10">
                  <div className="flex items-center space-x-1.5 text-white">
                    <Heart className={`w-4 h-4 ${hasLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                    <span className="font-sans text-xs font-bold">{post.likes + (hasLiked ? 1 : 0)}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-white">
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span className="font-sans text-xs font-bold">{post.commentsCount}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Post Inspector Modal */}
        {selectedPost && (
          <div 
            className="fixed inset-0 bg-black/85 z-[9999] flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedPost(null)}
          >
            <div 
              className="bg-surface text-on-surface w-full max-w-3xl rounded-md overflow-hidden grid grid-cols-1 md:grid-cols-12 max-h-[90vh] shadow-2xl relative border border-outline-variant/20"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Handle */}
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-3 right-3 bg-black/60 text-white rounded-full p-1.5 z-40 hover:bg-black transition-colors md:hidden"
              >
                ✕
              </button>

              {/* Graphic Block */}
              <div className="md:col-span-6 bg-black relative flex items-center justify-center min-h-[250px] md:h-full">
                <img 
                  src={selectedPost.image} 
                  alt="" 
                  className="w-full h-full object-cover max-h-[40vh] md:max-h-full" 
                />
              </div>

              {/* Feed Meta and Comments Interactive thread */}
              <div className="md:col-span-6 flex flex-col justify-between h-[50vh] md:h-[500px]">
                
                {/* Header Profile Info inside modal */}
                <div className="p-4 border-b border-outline-variant/20 shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAxe7HcO-Cal1WdbbFCgE9ZVd_P164e-LWO8UO7d_ak40AdWkq5G2RKfoQ3TNNGn9I0JpCcQS4haBzb6CTPjKxoV5A9b8SyhAc4gZG9Kzs9ZWjLLEf9f5CBB-KHLr39WGR5zhcZh-OqQOd2aVIWEXoF4qcx0WCIx25F6InDtu0xhZOwolaDBZxfVZeilc2ig6GRdBEyP0i4dHPivApRngmf9yZ6Sv-GlimW-EU-icHFe4QBxJNLzeY1si8D9Xj6XuKl2LCxWhFpbQ_" alt="" className="w-8 h-8 rounded-full border" />
                      <div>
                        <p className="font-sans text-[11px] font-bold text-on-surface flex items-center gap-1 leading-none">
                          maryamazharstudio
                          <span className="bg-[#0095f6] text-white p-0.5 rounded-full inline-flex items-center justify-center translate-y-[1px]">
                            <Check className="w-2 h-2 stroke-[3]" />
                          </span>
                        </p>
                        <p className="font-sans text-[9px] text-on-surface-variant">{selectedPost.location}</p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedPost(null)}
                      className="hidden md:flex text-on-surface-variant hover:text-primary transition-colors text-xs"
                    >
                      ✕ CLOSE
                    </button>
                  </div>
                </div>

                {/* Body Scrolling Content */}
                <div className="p-4 overflow-y-auto flex-grow space-y-4 scrollbar-thin">
                  
                  {/* Original Post Caption */}
                  <div className="flex items-start space-x-3 text-xs leading-relaxed">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAxe7HcO-Cal1WdbbFCgE9ZVd_P164e-LWO8UO7d_ak40AdWkq5G2RKfoQ3TNNGn9I0JpCcQS4haBzb6CTPjKxoV5A9b8SyhAc4gZG9Kzs9ZWjLLEf9f5CBB-KHLr39WGR5zhcZh-OqQOd2aVIWEXoF4qcx0WCIx25F6InDtu0xhZOwolaDBZxfVZeilc2ig6GRdBEyP0i4dHPivApRngmf9yZ6Sv-GlimW-EU-icHFe4QBxJNLzeY1si8D9Xj6XuKl2LCxWhFpbQ_" alt="" className="w-7 h-7 rounded-full shrink-0 mt-0.5" />
                    <div>
                      <p className="font-sans text-[11px] font-bold inline mr-1">maryamazharstudio</p>
                      <span className="text-on-surface-variant">{selectedPost.caption}</span>
                    </div>
                  </div>

                  {/* Comment Thread List */}
                  <div className="space-y-3 pt-3 border-t border-outline-variant/10">
                    {selectedPost.commentsList.map((cmt, idx) => (
                      <div key={idx} className="flex items-start space-x-3 text-xs">
                        <div className="w-7 h-7 rounded-full bg-surface-container-high shrink-0 text-on-surface-variant flex items-center justify-center font-bold text-[9px] uppercase border">
                          {cmt.username.slice(0, 2)}
                        </div>
                        <div className="flex-grow">
                          <p className="font-sans text-[11px] font-bold inline mr-1">{cmt.username}</p>
                          <span className="text-on-surface-variant">{cmt.text}</span>
                          <span className="block text-[8px] text-on-surface-variant/70 mt-0.5">{cmt.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Engagement action buttons */}
                <div className="p-4 border-t border-outline-variant/20 space-y-3 bg-surface-container-lowest shrink-0">
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex items-center space-x-4">
                      <button 
                        onClick={(e) => toggleLike(selectedPost.id, e)}
                        className="p-1 text-on-surface-variant hover:text-red-500 transition-colors"
                      >
                        <Heart className={`w-5 h-5 ${likedPosts[selectedPost.id] ? 'fill-red-500 text-red-500 animate-bounce' : ''}`} />
                      </button>
                      <button className="p-1 text-on-surface-variant hover:text-primary transition-colors">
                        <MessageCircle className="w-5 h-5" />
                      </button>
                    </div>
                    <span className="font-sans text-[10px] text-on-surface-variant uppercase font-bold tracking-wider">
                      {selectedPost.likes + (likedPosts[selectedPost.id] ? 1 : 0)} Likes
                    </span>
                  </div>

                  {/* Form input to post new live simulated comment */}
                  <form onSubmit={handleAddComment} className="flex gap-2 items-center">
                    <input 
                      type="text"
                      value={newComment}
                      onChange={e => setNewComment(e.target.value)}
                      placeholder="Add a comment on this artistry..."
                      className="flex-grow bg-transparent border-0 border-b border-outline-variant py-1 focus:ring-0 focus:border-primary text-xs placeholder:text-outline-variant/70 text-on-surface"
                    />
                    <button 
                      type="submit"
                      disabled={!newComment.trim()}
                      className="text-primary hover:text-primary-container disabled:text-outline-variant/40 p-1.5 transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
