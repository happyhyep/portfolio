import React from "react";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "src/components/layout/Layout";
import TopBar from "src/components/common/TopBar";
import DashTitle from "src/components/common/DashTitle";
import ProjectComponent from "src/components/ProjectComponent";
import getProjectPropsData from "src/lib/getProjectPropsData";

export default function Projects() {
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          zIndex: "9999999",
          left: "0",
        }}
        onClick={onClick}
      />
    );
  }
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          zIndex: "9999999",
          right: "0",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    arrow: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const propsObj = getProjectPropsData();
  // const propsObj: ProjectDataInterface[] = [
  //   {
  //     title: "기억 박물관 - 내 추억에 놀러와",
  //     subtitle: "- 추억 기록 모바일 웹콘텐츠",
  //     user: "(실 사용자 2만명)",
  //     strongStacks: [
  //       STACK_NAME.VUE,
  //       STACK_NAME.TYPESCRIPT,
  //       STACK_NAME.SASS,
  //       STACK_NAME.NODE,
  //       STACK_NAME.POSTGRESQL,
  //       STACK_NAME.S3,
  //     ],
  //     stacks: [STACK_NAME.DOCKER, STACK_NAME.JENKINS, STACK_NAME.FIGMA],
  //     desc: [
  //       "국립 민속 박물관 제 3관에서 진행한 웹 컨텐츠로,",
  //       "중장년층을 타겟으로 추억을 기록하는 웹 사이트를 개발 및 배포하였습니다.",
  //       "개발자 3명, 디자이너 2명, 기획자 1명, 개발 멘토 1명으로 진행하였습니다.",
  //       "그 중 저는 개발 PL(프로젝트 리더)로, 프론트엔드, 백엔드, DB를 맡아",
  //       "초기 프론트엔드 개발 세팅, 닉네임/연령대 입력 페이지 프론트엔드, 유물 선택 페이지 프론트엔드, 기록 페이지 프론트엔드, 결과 페이지 프론트엔드/백엔드, 공유 페이지 프론트엔드/백엔드를 개발하였습니다.",
  //     ],
  //     isHaveWeb: true,
  //     isHaveGithub: false,
  //     isHaveVideo: false,
  //     webLink: "https://nfm-trd-2023.apoc.day/#/",
  //     githubLink: null,
  //     videoLink: null,
  //   },
  // ];
  // const [isVideoModalOpen1, setIsVideoModalOpen1] = useState(false);
  // const [isVideoModalOpen2, setIsVideoModalOpen2] = useState(false);
  // const [isVideoModalOpen3, setIsVideoModalOpen3] = useState(false);
  // const [isVideoModalOpen4, setIsVideoModalOpen4] = useState(false);
  //
  // const onVideoModalOpen1 = () => {
  //   setIsVideoModalOpen1(true);
  // };
  // const onVideoModalOpen2 = () => {
  //   setIsVideoModalOpen2(true);
  // };
  // const onVideoModalOpen3 = () => {
  //   setIsVideoModalOpen3(true);
  // };
  // const onVideoModalOpen4 = () => {
  //   setIsVideoModalOpen4(true);
  // };

  return (
    <Layout>
      <section className="projects-page">
        <TopBar color="#000000" />
        <DashTitle name="Web"></DashTitle>
        <Slider {...settings}>
          {/* ---- 국립 민속 박물관 프로젝트 ---- */}
          {propsObj &&
            propsObj.map((el) => {
              return <ProjectComponent data={el} />;
            })}

          {/*<div className="project1">*/}
          {/*  <div style={{ display: "flex", justifyContent: "center" }}>*/}
          {/*    <img*/}
          {/*      alt="nfm-trd-2023"*/}
          {/*      src={nfmtrd2023}*/}
          {/*      style={{ width: "500px" }}*/}
          {/*    ></img>*/}
          {/*    <div*/}
          {/*      style={{ marginTop: "20px", marginLeft: "40px", width: "450px" }}*/}
          {/*    >*/}
          {/*      <Title>*/}
          {/*        <strong>기억 박물관 - 내 추억에 놀러와</strong>*/}
          {/*      </Title>*/}
          {/*      <Text style={{ fontSize: "20px" }}>*/}
          {/*        - 추억 기록 모바일 웹컨텐츠*/}
          {/*      </Text>*/}
          {/*      <Text>(실 사용자 2만명)</Text>*/}
          {/*      <Text>*/}
          {/*        <strong>Vue.js, Typescript, Sass, Node.js, PostgreSQL</strong>,*/}
          {/*        AWS, Figma*/}
          {/*      </Text>*/}
          {/*      <br />*/}
          {/*      <Text>국립 민속 박물관 제 3관에서 진행한 웹 컨텐츠로,</Text>*/}
          {/*      <Text>*/}
          {/*        중장년층을 타겟으로 추억을 기록하는 웹 사이트를 개발 및*/}
          {/*        배포하였습니다.*/}
          {/*      </Text>*/}
          {/*      <br />*/}
          {/*      <Text>*/}
          {/*        개발자 3명, 디자이너 2명, 기획자 1명, 개발 멘토 1명으로*/}
          {/*        진행하였습니다.*/}
          {/*      </Text>*/}
          {/*      <Text style={{ fontSize: "13px", fontStyle: "bold" }}>*/}
          {/*        그 중 저는 개발 <strong>PL(프로젝트 리더)</strong>로,*/}
          {/*        프론트엔드, 백엔드, DB를 맡아*/}
          {/*      </Text>*/}
          {/*      <Text style={{ fontSize: "13px" }}>*/}
          {/*        초기 프론트엔드 개발 세팅, 닉네임/연령대 입력 페이지 프론트엔드,*/}
          {/*        유물 선택 페이지 프론트엔드, 기록 페이지 프론트엔드, 결과 페이지*/}
          {/*        프론트엔드/백엔드, 공유 페이지 프론트엔드/백엔드를*/}
          {/*        개발하였습니다.*/}
          {/*      </Text>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/* <div style={{display: 'flex', justifyContent: 'end', marginTop: '5px', marginRight: '50px'}}>
                      <VideoButton onClick={onVideoModalOpen1} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>VIDEO 보기 → </VideoButton>
                  </div> */}
          {/*  {isVideoModalOpen1 ? (*/}
          {/*    <VideoModal*/}
          {/*      setIsVideoModalOpen={setIsVideoModalOpen1}*/}
          {/*      video={focuz_video}*/}
          {/*      pageNumber={1}*/}
          {/*    />*/}
          {/*  ) : null}*/}
          {/*  <div*/}
          {/*    style={{*/}
          {/*      display: "flex",*/}
          {/*      justifyContent: "end",*/}
          {/*      marginTop: "5px",*/}
          {/*      marginRight: "50px",*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <GithubButton*/}
          {/*      to="https://nfm-trd-2023.apoc.day/#/"*/}
          {/*      style={{*/}
          {/*        display: "flex",*/}
          {/*        justifyContent: "center",*/}
          {/*        alignItems: "center",*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      Web Page →*/}
          {/*    </GithubButton>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*  /!* ---- focuz 프로젝트 ---- *!/*/}
          {/*  <div className="project1">*/}
          {/*    <div style={{ display: "flex", justifyContent: "center" }}>*/}
          {/*      <img alt="focuz" src={focuz} style={{ width: "500px" }}></img>*/}
          {/*      <div*/}
          {/*        style={{ marginTop: "20px", marginLeft: "40px", width: "450px" }}*/}
          {/*      >*/}
          {/*        <Title>*/}
          {/*          <strong>FOCUZ</strong>*/}
          {/*        </Title>*/}
          {/*        <Text style={{ fontSize: "20px" }}>*/}
          {/*          - 얼굴인식 캠스터디 웹사이트*/}
          {/*        </Text>*/}
          {/*        <Text>(경희대 소프트웨어융합대학 동아리대항전 1위)</Text>*/}
          {/*        <Text>*/}
          {/*          <strong>React.js, Tensorflow, kakao oauth,</strong> Spring,*/}
          {/*          MySQL, redis*/}
          {/*        </Text>*/}
          {/*        <br />*/}
          {/*        <Text>*/}
          {/*          기존 화상 회의 프로그램 및 공부 프로그램과 차별화 하여*/}
          {/*        </Text>*/}
          {/*        <Text>얼굴 인식된 시간을 측정하여 공부 집중도를 분석합니다.</Text>*/}
          {/*        <br />*/}
          {/*        <Text>*/}
          {/*          프론트엔드 2명, 백엔드 2명, 멘토 2명으로 진행하였습니다.*/}
          {/*        </Text>*/}
          {/*        <Text style={{ fontSize: "13px" }}>*/}
          {/*          그 중 저는 프론트엔드에서*/}
          {/*        </Text>*/}
          {/*        <Text style={{ fontSize: "13px" }}>*/}
          {/*          페이지 라우팅, 회원가입/로그인-kakao auth, 공부하기*/}
          {/*          페이지-tensorflow 라이브러리 활용, 친구/그룹 추가/목록 페이지 -*/}
          {/*          페이지, 컴포넌트 개발, 스터디 그룹 생성 페이지, 분석*/}
          {/*          페이지(캘린더 날짜 설정, 시간 그래프화)를 구현하였습니다.*/}
          {/*        </Text>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div*/}
          {/*      style={{*/}
          {/*        display: "flex",*/}
          {/*        justifyContent: "end",*/}
          {/*        marginTop: "5px",*/}
          {/*        marginRight: "50px",*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <VideoButton*/}
          {/*        onClick={onVideoModalOpen1}*/}
          {/*        style={{*/}
          {/*          display: "flex",*/}
          {/*          justifyContent: "center",*/}
          {/*          alignItems: "center",*/}
          {/*          cursor: "pointer",*/}
          {/*        }}*/}
          {/*      >*/}
          {/*        VIDEO 보기 →{" "}*/}
          {/*      </VideoButton>*/}
          {/*    </div>*/}
          {/*    {isVideoModalOpen1 ? (*/}
          {/*      <VideoModal*/}
          {/*        setIsVideoModalOpen={setIsVideoModalOpen1}*/}
          {/*        video={focuz_video}*/}
          {/*        pageNumber={1}*/}
          {/*      />*/}
          {/*    ) : null}*/}
          {/*    <div*/}
          {/*      style={{*/}
          {/*        display: "flex",*/}
          {/*        justifyContent: "end",*/}
          {/*        marginTop: "5px",*/}
          {/*        marginRight: "50px",*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <GithubButton*/}
          {/*        to="https://github.com/happyhyep/FOCUZ"*/}
          {/*        style={{*/}
          {/*          display: "flex",*/}
          {/*          justifyContent: "center",*/}
          {/*          alignItems: "center",*/}
          {/*        }}*/}
          {/*      >*/}
          {/*        <img*/}
          {/*          alt="github"*/}
          {/*          src={github}*/}
          {/*          style={{ width: "16px", marginRight: "3px" }}*/}
          {/*        ></img>*/}
          {/*        GITHUB*/}
          {/*      </GithubButton>*/}
          {/*    </div>*/}
          {/*    <div style={{display: 'flex', justifyContent: 'center'}}>*/}
          {/*              <video width='600' controls="controls" ref={videoRef} onCanPlay={() => setPlayBackRate()}>*/}
          {/*                  <source src={focuz_video} type="video/mp4"/>*/}
          {/*              </video>*/}
          {/*          </div>*/}
          {/*  </div>*/}

          {/* ---- BBuRing_log ---- */}
          {/*<div className="project2">*/}
          {/*  <div style={{ display: "flex", justifyContent: "center" }}>*/}
          {/*    <img alt="bburing" src={bburing} style={{ width: "500px" }}></img>*/}
          {/*    <div*/}
          {/*      style={{*/}
          {/*        marginTop: "20px",*/}
          {/*        marginLeft: "40px",*/}
          {/*        width: "450px",*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <Title>*/}
          {/*        <strong>BBuRing_log</strong>*/}
          {/*      </Title>*/}
          {/*      <Text style={{ fontSize: "20px" }}>*/}
          {/*        - 전국 뿌링클 맛집 기록 웹사이트*/}
          {/*      </Text>*/}
          {/*      <Text>*/}
          {/*        <strong>React.js, Docker,</strong> Spring, Python, MySQL*/}
          {/*      </Text>*/}
          {/*      <br />*/}
          {/*      <Text>전국 뿌링클 맛집 탐방을 위해</Text>*/}
          {/*      <Text>각 매장 별로 리뷰를 기록해둘 수 있습니다.</Text>*/}
          {/*      <br />*/}
          {/*      <Text>프론트엔드 1명, 백엔드 1명으로 진행하였습니다.</Text>*/}
          {/*      <Text style={{ fontSize: "13px" }}>*/}
          {/*        그 중 저는 프론트엔드에서*/}
          {/*      </Text>*/}
          {/*      <Text style={{ fontSize: "13px" }}>*/}
          {/*        페이지 라우팅, 홈 사이트 안내-애니메이션, kakao map api-마커*/}
          {/*        등록, 지점 검색, 포스팅 확인-지도 클릭 시 리뷰/마우스 호버 글*/}
          {/*        미리보기, 포스팅 작성을 구현하였습니다.*/}
          {/*      </Text>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div*/}
          {/*    style={{*/}
          {/*      display: "flex",*/}
          {/*      justifyContent: "end",*/}
          {/*      marginTop: "5px",*/}
          {/*      marginRight: "50px",*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <VideoButton*/}
          {/*      onClick={onVideoModalOpen2}*/}
          {/*      style={{*/}
          {/*        display: "flex",*/}
          {/*        justifyContent: "center",*/}
          {/*        alignItems: "center",*/}
          {/*        cursor: "pointer",*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      VIDEO 보기 →{" "}*/}
          {/*    </VideoButton>*/}
          {/*  </div>*/}
          {/*  {isVideoModalOpen2 ? (*/}
          {/*    <VideoModal*/}
          {/*      setIsVideoModalOpen={setIsVideoModalOpen2}*/}
          {/*      video={bburing_video}*/}
          {/*      pageNumber={2}*/}
          {/*    />*/}
          {/*  ) : null}*/}
          {/*  <div*/}
          {/*    style={{*/}
          {/*      display: "flex",*/}
          {/*      justifyContent: "end",*/}
          {/*      marginTop: "5px",*/}
          {/*      marginRight: "50px",*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <GithubButton*/}
          {/*      to="https://github.com/happyhyep/BBuRing_log"*/}
          {/*      style={{*/}
          {/*        display: "flex",*/}
          {/*        justifyContent: "center",*/}
          {/*        alignItems: "center",*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <img*/}
          {/*        alt="github"*/}
          {/*        src={github}*/}
          {/*        style={{ width: "16px", marginRight: "3px" }}*/}
          {/*      ></img>*/}
          {/*      GITHUB*/}
          {/*    </GithubButton>*/}
          {/*  </div>*/}
          {/*  /!* <Happyhyep style={{marginTop: '30px'}}>VIDEO</Happyhyep>*/}
          {/*          <div style={{display: 'flex', justifyContent: 'center'}}>*/}
          {/*              <video width='600' controls="controls" ref={videoRef} onCanPlay={() => setPlayBackRate()}>*/}
          {/*                  <source src={bburing_video} type="video/mp4"/>*/}
          {/*              </video>*/}
          {/*          </div> *!/*/}
          {/*</div>*/}

          {/*  /!* ---- eclipse ---- *!/*/}
          {/*  <div className="project3">*/}
          {/*    <div style={{ display: "flex", justifyContent: "center" }}>*/}
          {/*      <img alt="bburing" src={eclipse} style={{ width: "500px" }}></img>*/}
          {/*      <div*/}
          {/*        style={{ marginTop: "20px", marginLeft: "40px", width: "450px" }}*/}
          {/*      >*/}
          {/*        <Title>*/}
          {/*          <strong>Eclipse</strong>*/}
          {/*        </Title>*/}
          {/*        <Text style={{ fontSize: "20px" }}>*/}
          {/*          - 대학생의 진로 걱정 해결을 위한 웹사이트*/}
          {/*        </Text>*/}
          {/*        <Text>*/}
          {/*          <strong>React.js</strong> Python(Django)*/}
          {/*        </Text>*/}
          {/*        <br />*/}
          {/*        <Text>코로나19 이후 선/후배 관계의 단절로</Text>*/}
          {/*        <Text>진로 걱정이 많은 대학생들을 위해 기획하였습니다.</Text>*/}
          {/*        <br />*/}
          {/*        <Text>프론트엔드 2명, 백엔드 2명으로 진행하였습니다.</Text>*/}
          {/*        <Text style={{ fontSize: "13px" }}>*/}
          {/*          그 중 저는 프론트엔드에서*/}
          {/*        </Text>*/}
          {/*        <Text style={{ fontSize: "13px" }}>*/}
          {/*          디자인, 페이지 라우팅, 홈화면, 로그인, 교수-학생 소통 페이지,*/}
          {/*          시간표 추천 페이지, 내 프로필 관리 페이지, 후원하기 페이지, 알람*/}
          {/*          확인하기 페이지를 구현하였습니다.*/}
          {/*        </Text>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div*/}
          {/*      style={{*/}
          {/*        display: "flex",*/}
          {/*        justifyContent: "end",*/}
          {/*        marginTop: "5px",*/}
          {/*        marginRight: "50px",*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <VideoButton*/}
          {/*        onClick={onVideoModalOpen3}*/}
          {/*        style={{*/}
          {/*          display: "flex",*/}
          {/*          justifyContent: "center",*/}
          {/*          alignItems: "center",*/}
          {/*          cursor: "pointer",*/}
          {/*        }}*/}
          {/*      >*/}
          {/*        VIDEO 보기 →{" "}*/}
          {/*      </VideoButton>*/}
          {/*    </div>*/}
          {/*    {isVideoModalOpen3 ? (*/}
          {/*      <VideoModal*/}
          {/*        setIsVideoModalOpen={setIsVideoModalOpen3}*/}
          {/*        video={eclipse_video}*/}
          {/*        pageNumber={3}*/}
          {/*      />*/}
          {/*    ) : null}*/}
          {/*    <div*/}
          {/*      style={{*/}
          {/*        display: "flex",*/}
          {/*        justifyContent: "end",*/}
          {/*        marginTop: "5px",*/}
          {/*        marginRight: "50px",*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <GithubButton*/}
          {/*        to="https://github.com/happyhyep/Eclipse"*/}
          {/*        style={{*/}
          {/*          display: "flex",*/}
          {/*          justifyContent: "center",*/}
          {/*          alignItems: "center",*/}
          {/*        }}*/}
          {/*      >*/}
          {/*        <img*/}
          {/*          alt="github"*/}
          {/*          src={github}*/}
          {/*          style={{ width: "16px", marginRight: "3px" }}*/}
          {/*        ></img>*/}
          {/*        GITHUB*/}
          {/*      </GithubButton>*/}
          {/*    </div>*/}
          {/*    /!* <Happyhyep style={{marginTop: '30px'}}>VIDEO</Happyhyep>*/}
          {/*          <div style={{display: 'flex', justifyContent: 'center'}}>*/}
          {/*              <video width='600' controls="controls" ref={videoRef} onCanPlay={() => setPlayBackRate()}>*/}
          {/*                  <source src={eclipse_video} type="video/mp4"/>*/}
          {/*              </video>*/}
          {/*          </div> *!/*/}
          {/*  </div>*/}

          {/*  /!* ---- gallery web ---- *!/*/}
          {/*<div className="project4">*/}
          {/*  <div style={{ display: "flex", justifyContent: "center" }}>*/}
          {/*    <img alt="bburing" src={gallery} style={{ width: "500px" }}></img>*/}
          {/*    <div*/}
          {/*      style={{*/}
          {/*        marginTop: "20px",*/}
          {/*        marginLeft: "40px",*/}
          {/*        width: "450px",*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <Title>*/}
          {/*        <strong>gallery web</strong>*/}
          {/*      </Title>*/}
          {/*      <Text style={{ fontSize: "20px" }}>*/}
          {/*        - 찍은 사진들을 기록해둘 수 있는 웹사이트*/}
          {/*      </Text>*/}
          {/*      <Text>*/}
          {/*        <strong>React.js, firebase</strong>*/}
          {/*      </Text>*/}
          {/*      <br />*/}
          {/*      <Text>사진 찍는 것을 좋아하는 사람들을 위해</Text>*/}
          {/*      <Text>*/}
          {/*        웹사이트에 기록해둘 수 있는 웹사이트를 기획하였습니다.*/}
          {/*      </Text>*/}
          {/*      <br />*/}
          {/*      <Text>혼자 toy project로 진행하였습니다.</Text>*/}
          {/*      <Text style={{ fontSize: "13px" }}>*/}
          {/*        디자인, 페이지 라우팅, 홈화면, 회원가입/로그인, 개인정보 수정,*/}
          {/*        글/사진 업로드, 포스팅 확인, 포스팅 수정, 포스팅 삭제를*/}
          {/*        구현하였습니다.*/}
          {/*      </Text>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div*/}
          {/*    style={{*/}
          {/*      display: "flex",*/}
          {/*      justifyContent: "end",*/}
          {/*      marginTop: "5px",*/}
          {/*      marginRight: "50px",*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <VideoButton*/}
          {/*      onClick={onVideoModalOpen4}*/}
          {/*      style={{*/}
          {/*        display: "flex",*/}
          {/*        justifyContent: "center",*/}
          {/*        alignItems: "center",*/}
          {/*        cursor: "pointer",*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      VIDEO 보기 →{" "}*/}
          {/*    </VideoButton>*/}
          {/*  </div>*/}
          {/*  {isVideoModalOpen4 ? (*/}
          {/*    <VideoModal*/}
          {/*      setIsVideoModalOpen={setIsVideoModalOpen4}*/}
          {/*      video={gallery_video}*/}
          {/*      pageNumber={4}*/}
          {/*    />*/}
          {/*  ) : null}*/}
          {/*  <div*/}
          {/*    style={{*/}
          {/*      display: "flex",*/}
          {/*      justifyContent: "end",*/}
          {/*      marginTop: "5px",*/}
          {/*      marginRight: "50px",*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <GithubButton*/}
          {/*      to="https://github.com/happyhyep/gallery-web"*/}
          {/*      style={{*/}
          {/*        display: "flex",*/}
          {/*        justifyContent: "center",*/}
          {/*        alignItems: "center",*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <img*/}
          {/*        alt="github"*/}
          {/*        src={github}*/}
          {/*        style={{ width: "16px", marginRight: "3px" }}*/}
          {/*      ></img>*/}
          {/*      GITHUB*/}
          {/*    </GithubButton>*/}
          {/*  </div>*/}
          {/*  /!* <Happyhyep style={{marginTop: '30px'}}>VIDEO</Happyhyep>*/}
          {/*          <div style={{display: 'flex', justifyContent: 'center'}}>*/}
          {/*              <video width='600' controls="controls" ref={videoRef} onCanPlay={() => setPlayBackRate()}>*/}
          {/*                  <source src={gallery_video} type="video/mp4"/>*/}
          {/*              </video>*/}
          {/*          </div> *!/*/}
          {/*</div>*/}

          {/*  /!* ---- apartment ---- *!/*/}
          {/*<div className="project5">*/}
          {/*  <div style={{ display: "flex", justifyContent: "center" }}>*/}
          {/*    <img*/}
          {/*      alt="bburing"*/}
          {/*      src={apartment}*/}
          {/*      style={{ width: "500px" }}*/}
          {/*    ></img>*/}
          {/*    <div*/}
          {/*      style={{*/}
          {/*        marginTop: "20px",*/}
          {/*        marginLeft: "40px",*/}
          {/*        width: "450px",*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <Title>*/}
          {/*        <strong>Search For Apartment Transactions</strong>*/}
          {/*      </Title>*/}
          {/*      <Text style={{ fontSize: "20px" }}>*/}
          {/*        - 아파트 매매 실거래가를 확인할 수 있는 웹사이트*/}
          {/*      </Text>*/}
          {/*      <Text>*/}
          {/*        <strong>Vanilla.js, 공공데이터 api, aws 배포</strong>*/}
          {/*      </Text>*/}
          {/*      <br />*/}
          {/*      <Text>원하는 지역을 선택하여</Text>*/}
          {/*      <Text>*/}
          {/*        아파트의 매매 실거래가를 확인하고, 부동산 페이지로 넘어갈 수*/}
          {/*        있습니다.*/}
          {/*      </Text>*/}
          {/*      <br />*/}
          {/*      <Text>프론트엔드 1명, api 크롤링 1명으로 진행하였습니다.</Text>*/}
          {/*      <Text style={{ fontSize: "13px" }}>*/}
          {/*        그 중 저는 프론트엔드에서*/}
          {/*      </Text>*/}
          {/*      <Text style={{ fontSize: "13px" }}>*/}
          {/*        디자인, api 연동, 검색 기능, 부동산 사이트 http 하이퍼링크*/}
          {/*        등을 구현하였습니다.*/}
          {/*      </Text>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div*/}
          {/*    style={{*/}
          {/*      display: "flex",*/}
          {/*      justifyContent: "end",*/}
          {/*      marginTop: "5px",*/}
          {/*      marginRight: "50px",*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <GithubButton*/}
          {/*      to="https://github.com/happyhyep/project_search_for_apart_transactions"*/}
          {/*      style={{*/}
          {/*        display: "flex",*/}
          {/*        justifyContent: "center",*/}
          {/*        alignItems: "center",*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <img*/}
          {/*        alt="github"*/}
          {/*        src={github}*/}
          {/*        style={{ width: "16px", marginRight: "3px" }}*/}
          {/*      ></img>*/}
          {/*      GITHUB*/}
          {/*    </GithubButton>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </Slider>
      </section>
    </Layout>
  );
}

// const DashLine = styled.div`
//   width: 30%;
//   height: 0px;
//   border: 1px dashed #000000;
//   margin-bottom: 30px;
//   margin-top: 30px;
// `;
//
// const Happyhyep = styled.div`
//   font-family: iceJaram-Rg;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 50px;
//   line-height: 71px;
//   text-align: center;
//   letter-spacing: 0.175em;
// `;
//
// const Title = styled.div`
//   font-family: Noto Sans KR;
//   font-size: 30px;
//   color: #53354a;
//   margin-top: 30px;
// `;
//
// const Text = styled.div`
//   font-family: Noto Sans KR;
//   font-size: 15px;
//   color: #53354a;
//   margin-top: 5px;
// `;
//
// const GithubButton = styled(NavLink)`
//   border-radius: 5px;
//   border-width: 0.5px;
//   width: 100px;
//   height: 30px;
//   background-color: #333;
//   color: #fff;
//   text-align: center;
//   text-decoration: none;
//   margin-bottom: 30px;
// `;
// const VideoButton = styled.button`
//   border-radius: 5px;
//   border-width: 0.5px;
//   width: 100px;
//   height: 30px;
//   background-color: #333;
//   color: #fff;
//   text-align: center;
//   text-decoration: none;
// `;
